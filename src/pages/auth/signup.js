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

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [load, setLoad] = useState(false);

  const signUp = async () => {
    setLoading(true);
    const { user, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (!error && !user) {
      setLoading(false);
      alert("Check your email for the login link!");
    }
    if (error) {
      setLoading(false);
      alert(error.message);
    }
  };

  const updateProfile = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { user } = session;

      const updates = {
        id: user.id,
        full_name,
        username,
        updated_at: new Date(),
      };

      let { error } = await supabase.from("profiles").upsert(updates);

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
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
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View
          style={{ marginTop: 100, marginBottom: 30, flex: 1, maxHeight: 100 }}
        >
          <Text txt={"Welcome"} size={40} fontFamily="Bold" />
          <Text
            txt={"Welcome. Let's Create Your Edxeno Account."}
            textCol="#676970"
          />
        </View>
        <View>
          <Input label={"Full Name"} setValue={setFullName} />
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

          <Button btnTxt={"Sign Up"} textCol={"white"} onPress={signUp} />
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};
export default SignUp;
