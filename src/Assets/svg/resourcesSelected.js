import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const ResourcesSelected = (props) => (
  <Svg
    width={22}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.909 19C18.95 19.008 21 16.51 21 13.438V6.57C21 3.499 18.95 1 15.909 1H6.09C3.05 1 1 3.499 1 6.57v6.868C1 16.51 3.05 19.008 6.091 19h9.818Z"
      fill="#4A458E"
      stroke="#4A458E"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.5 9.995c0-.811-4.157-3.406-4.63-2.94-.47.467-.516 5.369 0 5.88.518.512 4.63-2.129 4.63-2.94Z"
      fill="#fff"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ResourcesSelected;
