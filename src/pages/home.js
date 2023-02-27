import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Button,
  Input,
  RadioButton,
  Text,
  Card,
  IconButton,
} from "../components";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { supabase } from "../provider/initSupabase";
import Profile from "../Assets/svg/profile";
import Notification from "../Assets/svg/notification";
import Filter from "../Assets/svg/filter";

const Home = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [events, setEvents] = useState();

  useEffect(() => {
    const getData = async () => {
      let { data, error } = await supabase.from("events").select();

      if (error) {
        console.log(error);
      }
      if (data) {
        console.log(data);
        setEvents(data);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
  }, []);

  const handleSubmit = () => {
    navigation.navigate("Explore", { search: search });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          paddingHorizontal: 20,
        }}
      >
        {/* Header */}

        <View style={{ marginTop: 30, marginBottom: 10 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text
                txt={"Welcome,"}
                size={16}
                fontFamily="Bold"
                textCol="#676970"
              />
              <Text txt={"Blake Cross"} size={24} fontFamily="Bold" />
            </View>
            <View style={{ flexDirection: "row" }}>
              <IconButton
                icon={<Notification />}
                btnStyle={{ marginRight: 12 }}
              />
              <IconButton icon={<Profile />} />
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Input
              setValue={setSearch}
              icon={
                <Ionicons
                  name="md-search"
                  size={20}
                  color="rgba(17, 20, 32, .24)"
                />
              }
              placeTxt={"Search by University or Major"}
              onSubmit={handleSubmit}
            />
            <IconButton
              icon={<Filter />}
              btnStyle={{
                marginVertical: 10,
                height: 47,
                width: 47,
                marginLeft: 10,
              }}
            />
          </View>
        </View>
      </View>
      <ScrollView style={{ paddingTop: 20 }}>
        {/* Banner Image */}

        <Image
          source={{
            uri: "https://vkenmuxkhhfixrjvbaon.supabase.co/storage/v1/object/public/app-images/EdXeno_HomeImage.png?t=2023-02-26T22%3A49%3A00.126Z",
          }}
          style={{
            height: 200,
            borderRadius: 16,
            marginHorizontal: 20,
          }}
        />

        {/* Top Events */}

        <View style={{ marginTop: 30 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 20,
              marginBottom: 10,
            }}
          >
            <Text txt={"Top Events"} fontFamily={"Bold"} size={16} />
            <Text
              txt={"View All"}
              size={12}
              fontFamily={"SemiBold"}
              textCol={"#4A458E"}
            />
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {events?.map((item) => (
              <Pressable
                key={item.id}
                onPress={() => navigation.navigate("CollegeInfo")}
                style={({ pressed }) => [
                  {
                    flexDirection: "column",
                    borderWidth: 0,
                    borderRadius: 12,
                    width: 268,
                    backgroundColor: pressed ? "#F1F1F1" : "white",
                    color: "#000",
                    padding: 10,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 4,
                    },
                    shadowOpacity: 0.08,
                    shadowRadius: 24,
                    marginBottom: 15,
                    marginLeft: 20,
                  },
                ]}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: "100%",
                    height: 175,
                    borderRadius: 12,
                    marginRight: 10,
                  }}
                  resizeMode={"cover"}
                />
                <View
                  style={{
                    flexDirection: "column",
                    flex: 1,
                    paddingVertical: 20,
                  }}
                >
                  <Text
                    txt={item.name}
                    fontFamily={"Bold"}
                    size={14}
                    txtStyle={{ marginBottom: 5 }}
                  />
                  <Text
                    txt={item.time}
                    size={12}
                    textCol={"#11141F66"}
                    txtStyle={{ marginBottom: 5 }}
                  />
                </View>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* Featured Resources */}

        <View style={{ marginTop: 30 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 20,
              marginBottom: 10,
            }}
          >
            <Text txt={"Featured Resources"} fontFamily={"Bold"} size={16} />
            <Text
              txt={"View All"}
              size={12}
              fontFamily={"SemiBold"}
              textCol={"#4A458E"}
            />
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {events?.map((item) => (
              <Pressable
                key={item.id}
                onPress={() => navigation.navigate("CollegeInfo")}
                style={({ pressed }) => [
                  {
                    flexDirection: "column",
                    borderWidth: 0,
                    borderRadius: 12,
                    width: 268,
                    backgroundColor: pressed ? "#F1F1F1" : "white",
                    color: "#000",
                    padding: 10,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 4,
                    },
                    shadowOpacity: 0.08,
                    shadowRadius: 24,
                    marginBottom: 15,
                    marginLeft: 20,
                  },
                ]}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: "100%",
                    height: 175,
                    borderRadius: 12,
                    marginRight: 10,
                  }}
                  resizeMode={"cover"}
                />
                <View
                  style={{
                    flexDirection: "column",
                    flex: 1,
                    paddingVertical: 20,
                  }}
                >
                  <Text
                    txt={item.name}
                    fontFamily={"Bold"}
                    size={14}
                    txtStyle={{ marginBottom: 5 }}
                  />
                  <Text
                    txt={item.time}
                    size={12}
                    textCol={"#11141F66"}
                    txtStyle={{ marginBottom: 5 }}
                  />
                </View>
              </Pressable>
            ))}
          </ScrollView>
        </View>
        <View style={{ marginTop: 30, marginBottom: 300 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 20,
              marginBottom: 10,
            }}
          >
            <Text txt={"My College List"} fontFamily={"Bold"} size={16} />
            <Text
              txt={"View All"}
              size={12}
              fontFamily={"SemiBold"}
              textCol={"#4A458E"}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
