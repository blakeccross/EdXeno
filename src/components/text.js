import React, { useEffect, useCallback } from "react";
import { Text, StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default ({
  txt,
  txtStyle,
  textCol,
  fontFamily,
  size,
  left,
  right,
  center,
}) => {
  let [fontsLoaded] = useFonts({
    Black: require("../Assets/fonts/Inter-Black.otf"),
    ExtraBold: require("../Assets/fonts/Inter-ExtraBold.otf"),
    Bold: require("../Assets/fonts/Inter-Bold.otf"),
    SemiBold: require("../Assets/fonts/Inter-SemiBold.otf"),
    Medium: require("../Assets/fonts/Inter-Medium.otf"),
    Regular: require("../Assets/fonts/Inter-Regular.otf"),
    Light: require("../Assets/fonts/Inter-Light.otf"),
    ExtraLight: require("../Assets/fonts/Inter-ExtraLight.otf"),
    Thin: require("../Assets/fonts/Inter-Thin.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const Styles = StyleSheet.create({
    txt: {
      color: textCol ? textCol : "#11141F",
      fontFamily: fontFamily ? fontFamily : "Regular",
      fontSize: size ? size : 18,
      textAlign: center ? "center" : null,
    },
  });
  return (
    <View onLayout={onLayoutRootView}>
      <Text
        style={{
          ...Styles.txt,
          ...txtStyle,
        }}
      >
        {txt}
      </Text>
    </View>
  );
};
