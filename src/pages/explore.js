import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Image, ScrollView, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Input, RadioButton, Text, Card } from "../components";
import Texas from "../Assets/images/Texas.jpeg";
import { SharedElement } from "react-navigation-shared-element";
import { supabase } from "../provider/initSupabase";
import { Ionicons } from "@expo/vector-icons";
import UniversityDefault from "../Assets/images/university_default.jpeg";

const Explore = ({ navigation, route }) => {
  const [search, setSearch] = useState(route.params.search);
  const [data, setData] = useState(false);
  const [universities, setUniversities] = useState();

  const handleSubmit = async () => {
    if (search === "") {
      getData();
    } else {
      let { data, error } = await supabase
        .from("college test")
        .select()
        .textSearch("name", search, { type: "websearch" });
      if (error) {
        console.log(error);
      }
      if (data) {
        setUniversities(data);
      }
    }
  };

  const getData = async () => {
    let { data, error } = await supabase.from("college test").select();
    if (error) {
      console.log(error);
    }
    if (data) {
      setUniversities(data);
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);

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
          <Input
            setValue={setSearch}
            value={search}
            icon={
              <Ionicons
                name="md-search"
                size={20}
                color="rgba(17, 20, 32, .24)"
              />
            }
            placeTxt={"Search Colleges, Careers, Majors..."}
            onSubmit={handleSubmit}
          />
        </View>
      </LinearGradient>
      {universities && (
        <ScrollView style={{ padding: 20 }}>
          {universities.map((item) => (
            <Pressable
              key={item.id}
              onPress={() =>
                navigation.navigate("CollegeInfo", { college: item })
              }
              style={({ pressed }) => [
                {
                  flexDirection: "row",
                  borderWidth: 0,
                  borderRadius: 12,
                  width: "100%",
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
                },
              ]}
            >
              <SharedElement id={`${item.image}`}>
                <Image
                  source={
                    item.image
                      ? { uri: item.image }
                      : require("../Assets/images/university_default.jpeg")
                  }
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 12,
                    marginRight: 10,
                  }}
                  resizeMode={"cover"}
                />
              </SharedElement>
              <View style={{ flexDirection: "column", flex: 1 }}>
                <Text txt={item.name} fontFamily={"Bold"} size={14} />
                <View style={{ flexDirection: "row" }}>
                  <Text txt={item.city} size={12} />
                  <Text txt={", "} size={12} />
                  <Text txt={item.state} size={12} />
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text txt={item["attendance.academic_year"]} size={12} />

                  <Text
                    txt={
                      item["avg_net_price.private"] != "NULL"
                        ? "private"
                        : "public"
                    }
                    size={12}
                  />
                </View>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};
export default Explore;
