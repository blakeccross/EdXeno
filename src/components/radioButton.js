import React, { useEffect } from "react";
import {
  SafeAreaView,
  Image,
  View,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Text from "./text";

export const RadioButton = ({ selected, onPress }) => {
  const Styles = StyleSheet.create({
    btn: {
      padding: 20,
      //backgroundColor: btnCol ? btnCol : "#2b47fc",
      alignItems: "center",
      width: "100%",
      justifyContent: "center",
      borderRadius: 10,
    },
  });
  return (
    <Pressable
      style={({ pressed }) => [
        {
          flexDirection: "row",
          opacity: pressed ? 0.5 : 1,
        },
      ]}
      onPress={onPress}
    >
      <View
        style={[
          {
            height: 20,
            width: 20,
            borderRadius: 5,
            borderWidth: 2,
            borderColor: "#000",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 10,
          },
        ]}
      >
        {selected ? (
          <View
            style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: "#000",
            }}
          />
        ) : null}
      </View>
      <Text txt={"Remember Me"} />
    </Pressable>
  );
};
