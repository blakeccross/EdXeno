import React, { useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import Text from "../../components/text";
import { RadioButton } from "../../components/radioButton";
import { supabase } from "../../provider/initSupabase";
import "react-native-url-polyfill/auto";
import { Octicons } from "@expo/vector-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) alert(error.message);
    console.log(error);
    setLoading(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ paddingHorizontal: 20 }}>
        <View style={{ marginTop: 100, marginBottom: 50 }}>
          <Text txt={"Welcome Back!"} size={24} fontFamily="Bold" />
          <Text
            txt={"Enter your email and password to login account."}
            textCol="#676970"
            size={13}
          />
        </View>
        <View>
          <Input
            label={"Email"}
            keyboard={"email-address"}
            autoCorrect={false}
            setValue={setEmail}
            icon={<Octicons name="mail" size={24} color="#7B838A" />}
          />
          <Input
            label={"Password"}
            autoCorrect={false}
            setValue={setPassword}
            pass
            icon={<Octicons name="key" size={24} color="#7B838A" />}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 30,
            }}
          >
            <RadioButton />
            <Text txt={"Forgot Password?"} />
          </View>
          <Button btnTxt={"Log in"} textCol={"white"} onPress={onLogin} />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          position: "absolute",
          bottom: 0,
          marginBottom: 50,
        }}
      >
        <Text txt="New to EdXeno?" textCol="#676970" />
        <TouchableOpacity>
          <Text txt=" Sign Up" fontFamily={"Bold"} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Login;
