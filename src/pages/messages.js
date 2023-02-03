import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Image, ScrollView, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Input, RadioButton, Text, Card } from "../components";
import { supabase } from "../provider/initSupabase";

const Messages = ({ navigation }) => {
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
        <View style={{ marginTop: 20, marginBottom: 10 }}>
          <Text txt={"Messages"} size={18} fontFamily="SemiBold" />
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
              <Image
                source={{ uri: item.image }}
                style={{
                  width: 55,
                  height: 55,
                  borderRadius: 55,
                  marginRight: 10,
                }}
                resizeMode={"cover"}
              />
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
export default Messages;
