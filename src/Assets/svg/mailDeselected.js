import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

const MailDeselected = (props) => (
  <Svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G
      opacity={0.46}
      stroke="#4A458E"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="m18.403 8.851-4.444 3.613c-.84.666-2.02.666-2.86 0L6.62 8.851" />
      <Path
        clipRule="evenodd"
        d="M17.409 21c3.041.008 5.091-2.49 5.091-5.562V8.57C22.5 5.499 20.45 3 17.409 3H7.59C4.55 3 2.5 5.499 2.5 8.57v6.868c0 3.071 2.05 5.57 5.091 5.562h9.818Z"
      />
    </G>
  </Svg>
);

export default MailDeselected;
