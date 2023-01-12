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

const SignUp = () => {
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
      <View style={{ marginTop: 100, marginBottom: 50 }}>
        <Text txt={"Welcome Back!"} size={40} fontFamily="Bold" />
        <Text
          txt={"Enter your email and password to log in"}
          textCol="#676970"
        />
      </View>
      <View>
        <Input
          label={"Email"}
          icon={"mail"}
          keyboard={"email-address"}
          autoCorrect={false}
          setValue={setEmail}
        />
        <Input
          label={"Password"}
          icon={"lock"}
          autoCorrect={false}
          setValue={setPassword}
          pass
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
          <Text txt=" Sign Up" fontFamily={"Inter-Bold"} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
export default Login;
