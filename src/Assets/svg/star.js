import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const Star = (props) => (
  <Svg
    width={38}
    height={38}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      width={37.333}
      height={37.333}
      rx={12}
      transform="matrix(-1 0 0 1 37.333 .333)"
      fill="#87C8ED"
    />
    <Path
      d="m18.667 23.684 3.688 2.232a.887.887 0 0 0 1.325-.96l-.978-4.196 3.262-2.827c.596-.515.276-1.493-.506-1.555l-4.294-.365-1.68-3.964c-.302-.72-1.333-.72-1.635 0l-1.68 3.956-4.293.364c-.783.062-1.103 1.04-.507 1.555l3.262 2.827-.978 4.196a.887.887 0 0 0 1.325.96l3.689-2.223Z"
      fill="#fff"
    />
  </Svg>
);

export default Star;
