import * as React from "react";
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg";

const Schools = (props) => (
  <Svg
    width={36}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      width={35.726}
      height={35.726}
      rx={12}
      transform="matrix(-1 0 0 1 35.893 .137)"
      fill="#87A4ED"
    />
    <G clipPath="url(#a)">
      <Path
        d="m18.03 9.452-9.863 4.603 2.63 1.183v2.236c-.79.263-1.315 1.052-1.315 1.841 0 .79.526 1.578 1.315 1.841v.132l-1.184 2.761c-.394 1.184-.131 2.499 1.841 2.499 1.973 0 2.236-1.315 1.841-2.499l-1.183-2.761c.789-.395 1.315-1.052 1.315-1.973 0-.92-.526-1.578-1.315-1.841v-1.578l5.918 2.761 9.863-4.602-9.863-4.603ZM23.816 18l-5.918 2.63-3.156-1.446v.131c0 .92-.395 1.71-1.052 2.367l.789 1.841v.132c.132.526.263 1.052.132 1.578.92.394 1.972.657 3.287.657 4.34 0 5.918-2.63 5.918-3.945V18Z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#fff"
          transform="translate(8.167 8.137)"
          d="M0 0h19.726v19.726H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export default Schools;
