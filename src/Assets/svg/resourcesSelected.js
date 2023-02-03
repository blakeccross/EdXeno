import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const ResourcesSelected = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M10 9v6l5-3-5-3Zm11-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm-6 9-5 3V9l5 3Z"
        fill="#4A458E"
      />
      <Path d="m15 12-5-3v6l5-3Z" fill="#fff" />
      <Path d="m15 12-5-3v6l5-3Z" fill="#fff" fillOpacity={0.2} />
      <Path d="m15 12-5-3v6l5-3Z" stroke="#fff" strokeWidth={0.5} />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default ResourcesSelected;
