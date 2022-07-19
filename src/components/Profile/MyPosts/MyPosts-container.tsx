import React from "react";
import {
  addPostAC,
  incLikeAC,
  updatePostTextAC,
} from "../../../redux/profile-reducer";
//import { ActionType, PostDataType } from "../../../redux/store";
import StoreContext from "../../../store-context";
import MyPosts from "./MyPosts";

// type MyPostContainerPropsType = {
//   postData: Array<PostDataType>;
//   newPostText: string;
//   dispatch: (action: ActionType) => void;
// };

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const addPost = () => {
          store.dispatch(addPostAC());
        };
        const onPostChange = (text: string) => {
          store.dispatch(updatePostTextAC(text));
        };
        const incLike = (postID: string, likeIsPressed: boolean) => {
          store.dispatch(incLikeAC(postID, likeIsPressed));
        };
        return (
          <MyPosts
            postData={store.getState().profilePage.myPosts}
            newPostText={store.getState().profilePage.newPostText}
            updatePostText={onPostChange}
            addPost={addPost}
            incLike={incLike}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
