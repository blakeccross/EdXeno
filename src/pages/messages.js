import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { ChannelList } from "stream-chat-expo";
import { chatApiKey, chatUserId } from "../provider/chatConfig";
import { useAppContext } from "../provider/AppContext";

const filters = {
  members: {
    $in: [chatUserId],
  },
};

const sort = {
  last_message_at: -1,
};

const Messages = (props) => {
  const { setChannel } = useAppContext();
  return (
    <View style={{ flex: 1 }}>
      <ChannelList
        onSelect={(channel) => {
          const { navigation } = props;
          setChannel(channel);
          navigation.navigate("Chat");
        }}
        filters={filters}
        sort={sort}
      />
    </View>
  );
};
export default Messages;
