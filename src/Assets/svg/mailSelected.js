import * as React from "react";
import Svg, { Path } from "react-native-svg";

const MailSelected = (props) => (
  <Svg
    width={20}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.94 0A5.057 5.057 0 0 1 20 5.05v7.9c0 2.79-2.27 5.05-5.06 5.05H5.06A5.057 5.057 0 0 1 0 12.95v-7.9A5.05 5.05 0 0 1 5.06 0h9.88Zm1.59 6.54.08-.08a.773.773 0 0 0-.01-1 .84.84 0 0 0-.53-.26.76.76 0 0 0-.56.2L11 9a1.566 1.566 0 0 1-2 0L4.5 5.4a.76.76 0 0 0-1 .07c-.27.27-.3.7-.07 1l.13.13 4.55 3.55a3.143 3.143 0 0 0 3.91 0l4.51-3.61Z"
      fill="#4A458E"
    />
  </Svg>
);

export default MailSelected;
