import React from "react";
import {MyPostsContainer} from "./MyPosts/MyPosts-container";
import ProfileInfo from "./ProfileInfo";

// type ProfilePropsType = {
//   postData: ProfilePageType;
//   dispatch: (action: ActionType) => void;
// };

export function Profile() {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
}
