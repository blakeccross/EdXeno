import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Profile = (props) => (
  <Svg
    width={18}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      clipRule="evenodd"
      d="M8.985 14.346c-3.868 0-7.17.585-7.17 2.927s3.281 2.948 7.17 2.948c3.867 0 7.17-.586 7.17-2.927s-3.282-2.948-7.17-2.948ZM8.985 11.006A4.596 4.596 0 1 0 4.388 6.41a4.58 4.58 0 0 0 4.564 4.596h.033Z"
      stroke="#4A458E"
      strokeOpacity={0.8}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Profile;
