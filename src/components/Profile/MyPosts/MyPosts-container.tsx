import React from "react";
import {
  addPostAC,
  incLikeAC,
  updatePostTextAC,
} from "../../../redux/profile-reducer";
import { ActionType, PostDataType } from "../../../redux/store";
import MyPosts from "./MyPosts";

type MyPostContainerPropsType = {
  postData: Array<PostDataType>;
  newPostText: string;
  dispatch: (action: ActionType) => void;
};

const MyPostsContainer = (props: MyPostContainerPropsType) => {
  const addPost = () => {
    props.dispatch(addPostAC());
  };
  const onPostChange = (text: string) => {
    props.dispatch(updatePostTextAC(text));
  };
  const incLike = (postID: string, likeIsPressed: boolean) => {
    props.dispatch(incLikeAC(postID, likeIsPressed));
  };

  return (
    <MyPosts
      postData={props.postData}
      newPostText={props.newPostText}
      updatePostText={onPostChange}
      addPost={addPost}
      incLike={incLike}
    />
  );
};

export default MyPostsContainer;
