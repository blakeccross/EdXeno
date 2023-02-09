import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Image, ScrollView, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Input, RadioButton, Text, Card } from "../components";
import Texas from "../Assets/images/Texas.jpeg";
import { SharedElement } from "react-navigation-shared-element";
import { supabase } from "../provider/initSupabase";

const Events = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(false);
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
          <Text txt={"Events"} size={40} fontFamily="Bold" />
        </View>
      </LinearGradient>
      {events && (
        <ScrollView style={{ padding: 20 }}>
          {events.map((item) => (
            <Pressable
              key={item.id}
              onPress={() => navigation.navigate("CollegeInfo")}
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
                  source={{ uri: item.image }}
                  style={{
                    width: 140,
                    height: 140,
                    borderRadius: 12,
                    marginRight: 10,
                  }}
                  resizeMode={"cover"}
                />
              </SharedElement>
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
                  txt={item.location}
                  size={12}
                  textCol={"#11141F66"}
                  txtStyle={{ marginBottom: 5 }}
                />
                <Text txt={item.description} size={12} textCol={"#11141F66"} />
              </View>
            </Pressable>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};
export default Events;
