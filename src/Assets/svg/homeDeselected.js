import * as React from "react";
import Svg, { Path } from "react-native-svg";

const HomeDeselected = (props) => (
  <Svg
    width={20}
    height={23}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m1.16 7.76.001-.001c.107-.215.249-.382.43-.515l.009-.006 7.494-5.62c.15-.11.297-.184.441-.232.145-.048.299-.073.465-.073.166 0 .32.025.465.073.144.048.29.123.441.231l7.494 5.62.009.007A1.488 1.488 0 0 1 19 8.438v11.25c0 .42-.138.755-.44 1.059-.305.303-.64.44-1.06.44h-4v-8.75h-7v8.75h-4c-.42 0-.755-.137-1.058-.44A1.41 1.41 0 0 1 1 19.687V8.438c0-.24.052-.461.16-.676Zm-.894-.447c.177-.355.421-.646.734-.875l-.734.875Z"
      stroke="#4A458E"
      strokeOpacity={0.48}
      strokeWidth={2}
    />
  </Svg>
);

export default HomeDeselected;
