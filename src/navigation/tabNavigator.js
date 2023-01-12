import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Haptics from "expo-haptics";
import { MaterialIcons } from "@expo/vector-icons";
import Home from "../pages/home";
import Explore from "../pages/explore";
import Profile from "../pages/profile";
import {
  Ionicons,
  FontAwesome,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Styles = StyleSheet.create({
  tab: {
    position: "absolute",
  },
  txt: {
    textAlign: "center",
    fontSize: 12,
    marginTop: 5,
  },
  icon: {
    alignSelf: "center",
  },
  iconView: {
    //marginVertical: 100,
    // width: 25,
    height: 50,
    backgroundColor: "red",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export const TabNavigator = (session) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { position: "absolute", height: 100 },
        // tabBarShowLabel: false,
        tabBarActiveTintColor: "#2B47FC",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        listeners={() => ({
          tabPress: () => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          },
        })}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <MaterialIcons name="home-filled" size={30} color="blue" />
              ) : (
                <MaterialIcons name="home-filled" size={30} color="black" />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        listeners={() => ({
          tabPress: () => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          },
        })}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <Ionicons name="md-search" size={30} color="blue" />
              ) : (
                <Ionicons name="md-search" size={30} color="black" />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Explore}
        listeners={() => ({
          tabPress: () => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          },
        })}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <Ionicons name="ios-mail-open-outline" size={30} color="blue" />
              ) : (
                <Ionicons name="ios-mail-outline" size={30} color="black" />
              )}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Events"
        component={Explore}
        listeners={() => ({
          tabPress: () => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          },
        })}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <FontAwesome5 name="calendar" size={24} color="blue" />
              ) : (
                <FontAwesome5 name="calendar" size={24} color="black" />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        listeners={() => ({
          tabPress: () => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          },
        })}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <Feather name="user" size={30} color="blue" />
              ) : (
                <Feather name="user" size={30} color="black" />
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
