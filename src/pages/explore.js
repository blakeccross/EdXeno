import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Image, ScrollView, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Input, RadioButton, Text, Card } from "../components";
import Texas from "../Assets/images/Texas.jpeg";
import { SharedElement } from "react-navigation-shared-element";
import { supabase } from "../provider/initSupabase";

const Explore = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(false);
  const [universities, setUniversities] = useState();

  useEffect(() => {
    const getData = async () => {
      let { data, error } = await supabase.from("universities").select();

      if (error) {
        console.log(error);
      }
      if (data) {
        setUniversities(data);
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
          <Text txt={"Explore"} size={40} fontFamily="Bold" />
        </View>
      </LinearGradient>
      {universities && (
        <ScrollView style={{ padding: 20 }}>
          {universities.map((item) => (
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
                    width: 80,
                    height: 80,
                    borderRadius: 12,
                    marginRight: 10,
                  }}
                  resizeMode={"cover"}
                />
              </SharedElement>
              <View style={{ flexDirection: "column" }}>
                <Text txt={item.name} fontFamily={"Bold"} size={14} />
                <Text txt={item.location} size={12} />
              </View>
            </Pressable>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};
export default Explore;
