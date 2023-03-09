import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Chat, OverlayProvider } from "stream-chat-expo"; // Or stream-chat-expo
// import { StreamChat } from "stream-chat";
// import { chatApiKey } from "../provider/chatConfig";
// import { useChatClient } from "../provider/useChatClient";
import Messages from "../pages/messages";
import MessageChannel from "../pages/chat";

// const chatClient = StreamChat.getInstance(chatApiKey);
const Stack = createNativeStackNavigator();

const InboxStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Messages" component={Messages} />
    </Stack.Navigator>
  );
};

export default InboxStack;
