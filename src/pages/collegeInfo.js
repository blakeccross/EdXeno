import React, { useState } from "react";
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
import { Button, Input, RadioButton, Text, Card } from "../components";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SharedElement } from "react-navigation-shared-element";
import Texas from "../Assets/images/Texas.jpeg";

const CollegeInfo = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [load, setLoad] = useState(false);

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
        <View style={{ marginTop: 50, marginBottom: 10 }}>
          <Pressable onPress={() => navigation.goBack()}>
            <Text txt={"Texas A&M"} size={40} fontFamily="Bold" />
          </Pressable>
        </View>
      </LinearGradient>
      <SharedElement id={`${Texas}`}>
        <Image
          source={Texas}
          style={{
            width: "100%",
            height: 200,
            borderRadius: 12,
            marginRight: 10,
          }}
          resizeMode={"cover"}
          s
        />
      </SharedElement>
      <ScrollView style={{ padding: 20 }}></ScrollView>
    </SafeAreaView>
  );
};
CollegeInfo.sharedElements = (route) => {
  const { item } = route.params;
  return [
    {
      id: `${Texas}`,
      animation: "move",
      resize: "clip",
    },
  ];
};
export default CollegeInfo;
