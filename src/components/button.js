import React, { useEffect } from "react";
import {
  SafeAreaView,
  Image,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Text from "./text";

export const Button = ({
  btnStyle,
  btnTxt,
  onPress,
  disable,
  btnCol,
  textCol,
  loadCol,
  icon,
}) => {
  const Styles = StyleSheet.create({
    btn: {
      flexDirection: "row",
      padding: 20,
      backgroundColor: btnCol ? btnCol : "#2b47fc",
      alignItems: "center",
      width: "100%",
      justifyContent: "center",
      borderRadius: 10,
      marginVertical: 5,
    },
  });
  return (
    <View>
      <TouchableOpacity
        disabled={disable}
        onPress={onPress}
        style={{ ...Styles.btn, ...btnStyle }}
      >
        <View style={{ position: "absolute", left: 15 }}>
          {icon ? icon : null}
        </View>
        {disable ? (
          <ActivityIndicator color={loadCol ? loadCol : "white"} size="small" />
        ) : (
          <Text
            textCol={textCol ? textCol : "white"}
            fontFamily="Bold"
            txt={btnTxt}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};
