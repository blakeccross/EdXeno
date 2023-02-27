import React, { useEffect, useState } from "react";
import { View, TextInput, StyleSheet, Pressable } from "react-native";
import Text from "./text";
import { color } from "../Assets/config/colors";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export const Input = ({
  keyboard,
  icon,
  pass,
  placeTxt,
  //disable,
  col,
  setValue,
  value,
  editable = true,
  onSubmit,
  returnKeyLabel,
  type,
  autoCorrect,
  multiline,
  label,
  padding,
  fontSize,
  defaultValue,
}) => {
  const [passVisible, setPassVisible] = useState(false);

  useEffect(() => {
    setPassVisible(pass ? true : false);
  }, []);

  const onPassHiddenPress = () => {
    setPassVisible((prevValue) => !prevValue);
  };

  const Styles = StyleSheet.create({
    inputView: {
      flexDirection: "row",
      borderWidth: 1,
      borderRadius: 12,
      borderColor: "#E3E3E6",
      width: "100%",
      backgroundColor: col ? col : "white",
      color: "#000",
      padding: padding ? padding : 12,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.08,
      shadowRadius: 24,
      height: 50,
    },
    input: {
      fontFamily: "Medium",
      fontSize: fontSize ? fontSize : 16,
      flexGrow: 1,
    },
    label: {
      marginBottom: 10,
    },
  });
  return (
    <View style={{ marginVertical: 10 }}>
      {label && (
        <Text txtStyle={Styles.label} txt={label} fontFamily="Medium" />
      )}
      <View style={Styles.inputView}>
        <View style={{ marginRight: icon ? 10 : null }}>
          {icon ? icon : null}
        </View>
        <TextInput
          value={value}
          onChangeText={(e) => setValue(e)}
          style={Styles.input}
          editable={editable}
          autoCapitalize={"none"}
          secureTextEntry={passVisible}
          keyboardType={keyboard}
          placeholder={placeTxt}
          placeholderTextColor={"#D3D3D3"}
          returnKeyType={returnKeyLabel}
          onSubmitEditing={onSubmit}
          textContentType={type}
          autoCorrect={autoCorrect}
          multiline={multiline}
          defaultValue={defaultValue}
        />
        {pass && (
          <Pressable
            style={({ pressed }) => [
              {
                flexDirection: "row",
                opacity: pressed ? 0.5 : 1,
              },
            ]}
            onPress={() => onPassHiddenPress()}
          >
            <MaterialCommunityIcons
              name={passVisible ? "eye-off-outline" : "eye-outline"}
              size={28}
              color="#7B838A"
              style={{
                position: "absolute",
                right: 0,
                alignSelf: "center",
                backgroundColor: "white",
              }}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};
