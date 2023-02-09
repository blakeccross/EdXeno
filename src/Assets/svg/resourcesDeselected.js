import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const ResourcesDeselected = (props) => (
  <Svg
    width={22}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      opacity={0.48}
      d="M9 6v6l5-3-5-3Zm11-6H2C.9 0 0 .9 0 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2Zm0 16H2V2h18v14Z"
      fill="#4A458E"
    />
  </Svg>
);

export default ResourcesDeselected;
