import * as React from "react";
import Svg, { Path } from "react-native-svg";

const HomeSelected = (props) => (
  <Svg
    width={20}
    height={23}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2.5 22.188a2.407 2.407 0 0 1-1.765-.734A2.408 2.408 0 0 1 0 19.687V8.438c0-.395.089-.77.266-1.124.177-.355.421-.646.734-.875L8.5.813c.23-.167.469-.292.719-.375.25-.084.51-.126.781-.126.27 0 .531.042.781.126.25.083.49.208.719.374L19 6.438a2.487 2.487 0 0 1 1 2v11.25a2.41 2.41 0 0 1-.734 1.767 2.41 2.41 0 0 1-1.766.733h-5v-8.75h-5v8.75h-5Z"
      fill="#4A458E"
    />
  </Svg>
);

export default HomeSelected;
