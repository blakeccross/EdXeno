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

  return <View style={{ flex: 1 }}></View>;
};
export default Messages;
