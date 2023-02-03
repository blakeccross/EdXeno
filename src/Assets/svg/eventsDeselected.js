import * as React from "react";
import Svg, { Path } from "react-native-svg";

const EventsDeselected = (props) => (
  <Svg
    width={18}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      opacity={0.48}
      d="M16.2 1.9h-.9V.1h-1.8v1.8h-9V.1H2.7v1.8h-.9C.81 1.9 0 2.71 0 3.7v14.4c0 .99.81 1.8 1.8 1.8h14.4c.99 0 1.8-.81 1.8-1.8V3.7c0-.99-.81-1.8-1.8-1.8Zm0 16.2H1.8V8.2h14.4v9.9Zm0-11.7H1.8V3.7h14.4v2.7Z"
      fill="#4A458E"
    />
  </Svg>
);

export default EventsDeselected;
