import { MainNavigator } from "./src/navigation/mainNavigator";
import React, { useEffect, useCallback } from "react";
import { AppProvider } from "./src/provider/AppContext";
import "expo-dev-client";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Text, StyleSheet, View } from "react-native";
import "expo-dev-client";

SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded] = useFonts({
    Black: require("./src/Assets/fonts/Inter-Black.otf"),
    ExtraBold: require("./src/Assets/fonts/Inter-ExtraBold.otf"),
    Bold: require("./src/Assets/fonts/Inter-Bold.otf"),
    SemiBold: require("./src/Assets/fonts/Inter-SemiBold.otf"),
    Medium: require("./src/Assets/fonts/Inter-Medium.otf"),
    Regular: require("./src/Assets/fonts/Inter-Regular.otf"),
    Light: require("./src/Assets/fonts/Inter-Light.otf"),
    ExtraLight: require("./src/Assets/fonts/Inter-ExtraLight.otf"),
    Thin: require("./src/Assets/fonts/Inter-Thin.otf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <AppProvider onLayout={onLayoutRootView}>
      <MainNavigator />
    </AppProvider>
  );
}
