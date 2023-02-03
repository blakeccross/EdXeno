import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

const MailDeselected = (props) => (
  <Svg
    width={21}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G opacity={0.48}>
      <Path
        d="M20 8v9a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8c0-1.11.6-2.08 1.5-2.6l8-4.62 8 4.62c.9.52 1.5 1.49 1.5 2.6ZM2.72 6.47l7.78 5.03 7.78-5.03-7.78-4.54-7.78 4.54Zm7.78 6.24L2.13 7.28C2.05 7.5 2 7.75 2 8v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8c0-.25-.05-.5-.13-.72l-8.37 5.43Z"
        fill="#4A458E"
      />
      <Path
        d="m2.72 6.47 7.78 5.03 7.78-5.03-7.78-4.54-7.78 4.54M20 8v9a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8c0-1.11.6-2.08 1.5-2.6l8-4.62 8 4.62c.9.52 1.5 1.49 1.5 2.6Zm-9.5 4.71L2.13 7.28C2.05 7.5 2 7.75 2 8v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8c0-.25-.05-.5-.13-.72l-8.37 5.43Z"
        stroke="#4A458E"
        strokeWidth={0.8}
      />
    </G>
  </Svg>
);

export default MailDeselected;
