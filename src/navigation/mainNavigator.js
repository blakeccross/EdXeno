import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabNavigator } from "./tabNavigator";
import Login from "../pages/auth/login";
import SignUp from "../pages/auth/signup";
import Welcome from "../pages/welcome";
import CollegeInfo from "../pages/collegeInfo";
import Explore from "../pages/explore";
import Messages from "../pages/messages";
import "react-native-url-polyfill/auto";
import { supabase } from "../provider/initSupabase";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import MessageChannel from "../pages/chat";
// import { Chat, OverlayProvider } from "stream-chat-expo"; // Or stream-chat-expo
// import { useChatClient } from "../provider/useChatClient";
import { chatApiKey } from "../provider/chatConfig";
// import { StreamChat } from "stream-chat";

// const chatClient = StreamChat.getInstance(chatApiKey);

const Stack = createSharedElementStackNavigator();

//const Stack = createNativeStackNavigator();
export const MainNavigator = () => {
  const [session, setSession] = useState("");

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      console.log("1", session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      console.log("2", session);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {session && session.user ? (
          <>
            <Stack.Screen
              name="TabNavigator"
              component={TabNavigator}
              options={{ headerShown: false }}
              initialParams={session}
            />
            <Stack.Screen
              name="Explore"
              component={Explore}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CollegeInfo"
              component={CollegeInfo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chat"
              component={MessageChannel}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
