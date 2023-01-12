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

const Home = ({ navigation }) => {
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
        //location={[0.25, 0.4, 1]}
        style={{
          paddingHorizontal: 20,
        }}
      >
        <View style={{ marginTop: 50, marginBottom: 10 }}>
          <Text txt={"Welcome,"} fontFamily="Bold" textCol="#676970" />
          <Text txt={"Blake Cross"} size={40} fontFamily="Bold" />
          <Input
            setValue={setSearch}
            fontSize={17}
            padding={13}
            icon={
              <Ionicons
                name="md-search"
                size={30}
                color="rgba(17, 20, 32, .24)"
              />
            }
            placeTxt={"Search Colleges, Careers, Majors..."}
          />
        </View>
      </LinearGradient>
      <ScrollView style={{ padding: 20 }}>
        <View
          style={{
            backgroundColor: "royalblue",
            borderRadius: 20,
            padding: 30,
          }}
        >
          <Text
            txt={"Get personalized\nCollege list with"}
            size={20}
            fontFamily="Medium"
            textCol={"white"}
          />
          <Text txt={"EdXeno"} size={40} fontFamily="Bold" textCol={"white"} />
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 50,
              height: 45,
              width: 45,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <MaterialIcons name="arrow-forward" size={30} color="black" />
          </View>
        </View>
        <View style={{ marginVertical: 30 }}>
          <Text txt={"Explore"} fontFamily={"Bold"} size={22} />
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
              <Schools />
              <Text
                txt={"Explore"}
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
              <Star />
              <Text
                txt={"Careers"}
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
              <Star />
              <Text
                txt={"Careers"}
                fontFamily={"Medium"}
                size={20}
                txtStyle={{ marginLeft: 10 }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
