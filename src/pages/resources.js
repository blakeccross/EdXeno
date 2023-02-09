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
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { supabase } from "../provider/initSupabase";
import Schools from "../Assets/svg/schools";
import Star from "../Assets/svg/star";

const Resources = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [session, setSession] = useState("");
  const [loading, setLoading] = useState(false);
  const [full_name, setFullname] = useState("Blake Cross");
  const [username, setUsername] = useState("blakecross");
  const [website, setWebsite] = useState("church1099.com");
  const [avatar_url, setAvatarUrl] = useState("somewebsite.com");

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      console.log("HOME PAGE", session);
    });
  }, []);

  const updateProfile = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { user } = session;

      const updates = {
        id: user.id,
        full_name,
        username,
        website,
        avatar_url,
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
        style={{
          paddingHorizontal: 20,
        }}
      >
        <View style={{ marginTop: 30, marginBottom: 10 }}>
          <Text txt={"Resources"} size={24} fontFamily="Bold" />
        </View>
      </LinearGradient>
      <ScrollView style={{ padding: 20 }}>
        <View style={{ marginVertical: 30 }}>
          <Text txt={"Featured Classes"} fontFamily={"Bold"} size={18} />
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 0,
                borderRadius: 15,
                backgroundColor: "white",
                padding: 20,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.08,
                shadowRadius: 24,
                marginVertical: 10,
                marginRight: 20,
              }}
            >
              <Text
                txt={"Video 1"}
                fontFamily={"Medium"}
                size={20}
                txtStyle={{ marginLeft: 10 }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 0,
                borderRadius: 15,
                backgroundColor: "white",
                padding: 20,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.08,
                shadowRadius: 24,
                marginVertical: 10,
                marginRight: 20,
              }}
            >
              <Text
                txt={"Video 2"}
                fontFamily={"Medium"}
                size={20}
                txtStyle={{ marginLeft: 10 }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 0,
                borderRadius: 15,
                backgroundColor: "white",
                padding: 20,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.08,
                shadowRadius: 24,
                marginVertical: 10,
              }}
            >
              <Text
                txt={"Video 3"}
                fontFamily={"Medium"}
                size={20}
                txtStyle={{ marginLeft: 10 }}
              />
            </View>
          </View>
        </View>
        <View style={{ marginVertical: 30 }}>
          <Text txt={"Popular Courses"} fontFamily={"Bold"} size={18} />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 0,
              borderRadius: 15,
              backgroundColor: "white",
              padding: 20,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.08,
              shadowRadius: 24,
              marginVertical: 10,
              marginRight: 20,
            }}
          >
            <Text
              txt={"Video 1"}
              fontFamily={"Medium"}
              size={20}
              txtStyle={{ marginLeft: 10 }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 0,
              borderRadius: 15,
              backgroundColor: "white",
              padding: 20,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.08,
              shadowRadius: 24,
              marginVertical: 10,
              marginRight: 20,
            }}
          >
            <Text
              txt={"Video 2"}
              fontFamily={"Medium"}
              size={20}
              txtStyle={{ marginLeft: 10 }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Resources;
