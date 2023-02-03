import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  View,
  Image,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Input, RadioButton, Text, Card } from "../components";
import { supabase } from "../provider/initSupabase";
import { Session } from "@supabase/supabase-js";

export default function Profile({ testing }) {
  const [username, setUsername] = useState("");
  const [full_name, setFullName] = useState("");
  const [loading, setLoading] = useState(true);
  const [website, setWebsite] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [session, setSession] = useState();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session).then(getProfile());
    });
  }, []);

  useEffect(() => {
    getProfile();
  }, [session]);

  const getProfile = async () => {
    try {
      setLoading(true);
      const { user } = session;

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, full_name`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setFullName(data.full_name);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { user } = session;

      const updates = {
        id: user.id,
        full_name,
        updated_at: new Date(),
      };

      let { error } = await supabase.from("profiles").upsert(updates);

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <LinearGradient
        colors={["white", "#E6ECF9"]}
        start={[0.5, 0]}
        end={[0.5, 1]}
        //location={[0.25, 0.4, 1]}
        style={{
          paddingHorizontal: 20,
        }}
      >
        <View style={{ marginTop: 50, marginBottom: 10 }}>
          <Text txt={"Profile"} size={40} fontFamily="Bold" />
        </View>
      </LinearGradient>
      <View style={{ padding: 20 }}>
        <Input
          label={"Full Name"}
          setValue={setFullName}
          defaultValue={full_name}
        />
        <Button btnTxt={"Update Profile"} onClick={updateProfile()} />
        <Button
          btnTxt={"Sign Out"}
          onPress={() => supabase.auth.signOut()}
          btnCol={"red"}
        />
      </View>
      <ScrollView style={{ padding: 20 }}></ScrollView>
    </SafeAreaView>
  );
}
