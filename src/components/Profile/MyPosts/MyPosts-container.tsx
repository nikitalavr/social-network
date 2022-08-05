import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  addPostAC,
  incLikeAC,
  PostDataType,
  updatePostTextAC,
} from "../../../redux/profile-reducer";
import { ReduxStateType } from "../../../redux/redux-store";
//import { ActionType, PostDataType } from "../../../redux/store";
import MyPosts from "./MyPosts";

// const MyPostsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         const addPost = () => {
//           store.dispatch(addPostAC());
//         };
//         const onPostChange = (text: string) => {
//           store.dispatch(updatePostTextAC(text));
//         };
//         const incLike = (postID: string, likeIsPressed: boolean) => {
//           store.dispatch(incLikeAC(postID, likeIsPressed));
//         };
//         return (
//           <MyPosts
//             postData={store.getState().profilePage.myPosts}
//             newPostText={store.getState().profilePage.newPostText}
//             updatePostText={onPostChange}
//             addPost={addPost}
//             incLike={incLike}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

type MapStateToPropsType = {
  postData: Array<PostDataType>;
  newPostText: string;
};

type MapDispatchToPropsType = {
  updatePostText: (text: string) => void;
  addPost: () => void;
  incLike: (postID: string, likeIsPressed: boolean) => void;
};

const mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
  return {
    postData: state.profilePage.myPosts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    updatePostText: (text: string) => {
      dispatch(updatePostTextAC(text));
    },
    addPost: () => {
      dispatch(addPostAC());
    },
    incLike: (postID: string, likeIsPressed: boolean) => {
      dispatch(incLikeAC(postID, likeIsPressed));
    },
  };
};

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
