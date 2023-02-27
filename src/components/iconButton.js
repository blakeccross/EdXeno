import React, { useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

export const IconButton = ({ icon, btnStyle }) => {
  const Styles = StyleSheet.create({
    btn: {
      width: 40,
      height: 40,
      backgroundColor: "white",
      borderColor: "#E3E3E6",
      borderWidth: 1,
      borderRadius: 12,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  return (
    <TouchableOpacity style={{ ...Styles.btn, ...btnStyle }}>
      {icon}
    </TouchableOpacity>
  );
};
