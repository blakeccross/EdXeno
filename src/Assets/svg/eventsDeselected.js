import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

const EventsDeselected = (props) => (
  <Svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G
      opacity={0.48}
      stroke="#4A458E"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M3.593 9.404h17.823M16.942 13.31h.01M12.505 13.31h.009M8.058 13.31h.01M16.942 17.196h.01M12.505 17.196h.009M8.058 17.196h.01M16.544 2v3.29M8.465 2v3.29" />
      <Path
        clipRule="evenodd"
        d="M16.738 3.58H8.271C5.334 3.58 3.5 5.214 3.5 8.221v9.05C3.5 20.326 5.334 22 8.271 22h8.458c2.946 0 4.771-1.645 4.771-4.653V8.222c.01-3.007-1.816-4.643-4.762-4.643Z"
      />
    </G>
  </Svg>
);

export default EventsDeselected;
