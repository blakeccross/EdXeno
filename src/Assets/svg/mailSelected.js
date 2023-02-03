import * as React from "react";
import Svg, { Path } from "react-native-svg";

const MailSelected = (props) => (
  <Svg
    width={20}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8.89.538a2 2 0 0 1 2.072-.09l.147.09 8 5.333a2 2 0 0 1 .884 1.498l.007.166V17a2 2 0 0 1-1.85 1.995L18 19H2a2 2 0 0 1-1.995-1.85L0 17V7.535a2 2 0 0 1 .756-1.566l.135-.098 8-5.333H8.89ZM10 2.202 2.803 7 10 11.798 17.197 7 10 2.202Z"
      fill="#4A458E"
    />
  </Svg>
);

export default MailSelected;
