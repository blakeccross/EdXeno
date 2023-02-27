import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const ResourcesDeselected = (props) => (
  <Svg
    width={23}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      clipRule="evenodd"
      d="M16.409 19c3.041.008 5.091-2.49 5.091-5.562V6.57C21.5 3.499 19.45 1 16.409 1H6.59C3.55 1 1.5 3.499 1.5 6.57v6.868c0 3.071 2.05 5.57 5.091 5.562h9.818Z"
      stroke="#4A458E"
      strokeOpacity={0.46}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M14 9.995c0-.811-4.157-3.406-4.63-2.94-.47.467-.516 5.369 0 5.88.518.512 4.63-2.129 4.63-2.94Z"
      stroke="#4A458E"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity={0.4}
    />
  </Svg>
);

export default ResourcesDeselected;
