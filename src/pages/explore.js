import React, { useState } from "react";
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

const Explore = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [load, setLoad] = useState(false);

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
          <Text txt={"Explore"} size={40} fontFamily="Bold" />
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
      <ScrollView style={{ padding: 20 }}></ScrollView>
    </SafeAreaView>
  );
};
export default Explore;
