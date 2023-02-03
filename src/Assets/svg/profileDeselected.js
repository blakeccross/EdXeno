import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ProfileDeselected = (props) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      opacity={0.48}
      d="M8 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 7c2.67 0 8 1.33 8 4v3H0v-3c0-2.67 5.33-4 8-4Zm0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V13c0-.64-3.13-2.1-6.1-2.1Z"
      fill="#4A458E"
    />
  </Svg>
);

export default ProfileDeselected;
