import React, { useEffect, useState } from "react";
import { View, TextInput, StyleSheet, Pressable } from "react-native";
import Text from "./text";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const Card = ({ children, style }) => {
  const Styles = StyleSheet.create({
    card: {
      flexDirection: "row",
      borderWidth: 0,
      borderRadius: 15,
      width: "100%",
      // backgroundColor: col ? col : "white",
      padding: 25,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.04,
      shadowRadius: 24,
      height: 40,
    },
  });
  return <View style={{ ...Styles.card, ...style }}>{children}</View>;
};
