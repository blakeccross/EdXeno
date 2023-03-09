import React, { useState, useEffect } from "react";
import { View, SafeAreaView, Text } from "react-native";
// import { ChannelList } from "stream-chat-expo";
// import { chatApiKey, chatUserId } from "../provider/chatConfig";
// import { useAppContext } from "../provider/AppContext";
import AgoraUIKit, { PropsInterface } from "agora-rn-uikit";

const Messages = () => {
  const [videoCall, setVideoCall] = useState(true);
  const props = {
    connectionData: {
      appId: "57792c76a9b34d9386b870a72fc248cd",
      channel: "test",
      token:
        "007eJxTYDB8pzX19YcJj1VTHVovX77x80GO53fxC62ZSWena+tM//hUgcHU3NzSKNncLNEyydgkxdLYwizJwtwg0dwoLdnIxCI55ZUtW0pDICPDCd0zDIxQCOKzMJSkFpcwMAAAQJIiVA==",
    },
    rtcCallbacks: {
      EndCall: () => setVideoCall(false),
    },
  };

  return videoCall ? (
    <AgoraUIKit
      connectionData={props.connectionData}
      rtcCallbacks={props.rtcCallbacks}
    />
  ) : (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "red",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Text onPress={() => setVideoCall(true)}>Start Call</Text>
      </View>
    </SafeAreaView>
  );
};
export default Messages;
