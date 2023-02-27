import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ListDeselected = (props) => (
  <Svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M16.216 16.223h-7.22M16.216 12.037h-7.22M11.751 7.86H8.996"
      stroke="#4A458E"
      strokeOpacity={0.46}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="m16.409 2.75-7.69.004C5.96 2.77 4.25 4.587 4.25 7.357v9.196c0 2.784 1.722 4.607 4.506 4.607l7.69-.003c2.76-.017 4.47-1.834 4.47-4.604V7.357c0-2.784-1.724-4.607-4.508-4.607Z"
      stroke="#4A458E"
      strokeOpacity={0.46}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ListDeselected;
