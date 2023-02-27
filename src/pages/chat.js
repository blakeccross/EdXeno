import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  View,
  Image,
  ScrollView,
} from "react-native";
import { Channel, MessageList, MessageInput } from "stream-chat-expo";
import { useAppContext } from "../provider/AppContext";

const MessageChannel = (props) => {
  const { channel } = useAppContext();

  return (
    <View style={{ flex: 1 }}>
      <Channel channel={channel}>
        <MessageList />
        <MessageInput />
      </Channel>
    </View>
  );
};

export default MessageChannel;
