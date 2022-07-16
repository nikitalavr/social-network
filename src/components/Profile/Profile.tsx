import React from "react";
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import { ActionType, profilePageType } from "../../redux/state";

type ProfilePropsType = {
  postData: profilePageType;
  dispatch: (action: ActionType) => void;
};

export function Profile(props: ProfilePropsType) {
  return (
    <div>
      <div className={style.wallpaper}>
        <img
          src="data:image/jpeg;base64,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"
          alt="profile background"
        />
      </div>
      <div className={style.ava_description}>
        <div className={style.avatar}>
          <img
            src="data:image/jpeg;base64,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"
            alt="avatar"
          />
          <button>change</button>
        </div>
        <div className={style.description}>description</div>
      </div>
      <MyPosts
        postData={props.postData.myPosts}
        newPostText={props.postData.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
}
