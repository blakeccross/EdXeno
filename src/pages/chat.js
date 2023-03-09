import React from "react";
import { View } from "react-native";
// import { Channel, MessageList, MessageInput } from "stream-chat-expo";
import { useAppContext } from "../provider/AppContext";
import AgoraUIKit, { PropsInterface } from "agora-rn-uikit";

const MessageChannel = () => {
  const [videoCall, setVideoCall] = useState(false);
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
    <View style={{ flex: 1, backgroundColor: "red" }}></View>
  );
};

export default MessageChannel;
