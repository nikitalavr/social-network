import React from "react";
import { ActionType, ProfilePageType } from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPosts-container";
import ProfileInfo from "./ProfileInfo";

type ProfilePropsType = {
  postData: ProfilePageType;
  dispatch: (action: ActionType) => void;
};

export function Profile(props: ProfilePropsType) {
  return (
    <div>
      <ProfileInfo/>
      <MyPostsContainer
        postData={props.postData.myPosts}
        newPostText={props.postData.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
}
