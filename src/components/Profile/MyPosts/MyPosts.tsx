import React from "react";
import { ActionType, addPostAC, PostDataType, updatePostTextAC } from "../../../redux/state";
import style from "../Profile.module.css";
import Post from "./Post/Post";

type MyPostPropsType = {
  postData: Array<PostDataType>;
  newPostText: string;
  dispatch: (action: ActionType) => void;
};

const MyPosts = (props: MyPostPropsType) => {
  let newPostElement = React.createRef<HTMLTextAreaElement>();
  const addPost = () => {
    props.dispatch(addPostAC());
  };

  const onPostChange = () => {
    let text = newPostElement.current ? newPostElement.current.value : ""
    props.dispatch(updatePostTextAC(text));
  };

  let postsToRender = props.postData.map((p) => (
    <Post
      key={p.id}
      id={p.id}
      message={p.message}
      likes={p.likes}
      likeIsPressed={p.likeIsPressed}
      dispatch={props.dispatch}
    />
  ));

  return (
    <div className={style.posts_area}>
      My posts
      <div>
        <textarea
          ref={newPostElement}
          value={props.newPostText}
          onChange={onPostChange}
        ></textarea>
        <button onClick={addPost}>Add</button>
      </div>
      {postsToRender}
    </div>
  );
};

export default MyPosts;
