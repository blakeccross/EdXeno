import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Filter = (props) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      clipRule="evenodd"
      d="m7.745 18.333 3.98-1.873v-4.91l6.241-6.33c.235-.237.367-.562.367-.903V2.931c0-.699-.548-1.264-1.225-1.264H2.892c-.677 0-1.225.565-1.225 1.264V4.35c0 .321.118.63.33.865l5.748 6.336v6.783Z"
      stroke="#4A458E"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Filter;
