import React, { useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  View,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Input, RadioButton, Text } from "../components";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Welcome = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [load, setLoad] = useState(false);

  const onLogin = () => {
    console.log(email, password);
  };

  return (
    <LinearGradient
      colors={["#e6ecf900", "#E6ECF9"]}
      start={[0, 0]}
      end={[1, 1]}
      location={[0.25, 0.4, 1]}
      style={{
        paddingHorizontal: 20,
        flex: 1,
      }}
    >
      <View style={{ marginTop: 200, marginBottom: 50 }}>
        <Text
          txt={"👋👋👋\nWelcome to\nEdXeno 🎉🎉🎉"}
          size={40}
          fontFamily="Bold"
        />
      </View>

      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          marginBottom: 50,
          paddingHorizontal: 20,
        }}
      >
        <Button
          btnTxt={"Sign in with Apple"}
          textCol={"black"}
          onPress={onLogin}
          btnCol={"white"}
          btnStyle={{ marginBottom: 10 }}
          icon={<MaterialCommunityIcons name="apple" size={30} color="black" />}
        />
        <Button
          btnTxt={"Sign in with Google"}
          textCol={"black"}
          onPress={onLogin}
          btnCol={"white"}
          btnStyle={{ marginBottom: 10 }}
          icon={
            <Image
              source={require("../../assets/google_logo.png")}
              style={{ height: 25, width: 25 }}
            />
          }
        />
        <Button
          btnTxt={"Sign in with Email"}
          onPress={() => navigation.navigate("Login")}
          btnStyle={{ marginBottom: 15 }}
          icon={
            <MaterialCommunityIcons
              name="email-outline"
              size={30}
              color="white"
            />
          }
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Text txt="New to EdXeno?" textCol="#676970" />
          <TouchableOpacity>
            <Text txt=" Sign Up" fontFamily={"Bold"} />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};
export default Welcome;
