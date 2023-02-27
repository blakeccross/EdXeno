import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Haptics from "expo-haptics";
import { MaterialIcons } from "@expo/vector-icons";
import Home from "../pages/home";
import Explore from "../pages/explore";
import Profile from "../pages/profile";
import Messages from "../pages/messages";
import Resources from "../pages/resources";
import Events from "../pages/events";
import HomeSelected from "../Assets/svg/homeSelected";
import HomeDeselected from "../Assets/svg/homeDeselected";
import MailSelected from "../Assets/svg/mailSelected";
import MailDeselected from "../Assets/svg/mailDeselected";
import ResourcesSelected from "../Assets/svg/resourcesSelected";
import ResourcesDeselected from "../Assets/svg/resourcesDeselected";
import ProfileDeselected from "../Assets/svg/profileDeselected";
import ProfileSelected from "../Assets/svg/profileSelected";
import EventsDeselected from "../Assets/svg/eventsDeselected";
import EventsSelected from "../Assets/svg/eventsSelected";
import InboxStack from "./inboxNavigator";
import ListDeselected from "../Assets/svg/listDeselected";
import ListSelected from "../Assets/svg/listSelected";

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
    height: 50,
    backgroundColor: "red",
  },
});

export const TabNavigator = (session) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { position: "absolute", height: 100 },
        tabBarActiveTintColor: "#11141F",
        tabBarLabelStyle: { fontSize: 12 },
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
            <View>{focused ? <HomeSelected /> : <HomeDeselected />}</View>
          ),
        }}
      />
      <Tab.Screen
        name="My List"
        component={Profile}
        listeners={() => ({
          tabPress: () => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          },
        })}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>{focused ? <ListSelected /> : <ListDeselected />}</View>
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={InboxStack}
        listeners={() => ({
          tabPress: () => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          },
        })}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>{focused ? <MailSelected /> : <MailDeselected />}</View>
          ),
        }}
      />
      <Tab.Screen
        name="Resources"
        component={Resources}
        listeners={() => ({
          tabPress: () => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          },
        })}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? <ResourcesSelected /> : <ResourcesDeselected />}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Events"
        component={Events}
        listeners={() => ({
          tabPress: () => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          },
        })}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>{focused ? <EventsSelected /> : <EventsDeselected />}</View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
