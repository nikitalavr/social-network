import React from "react";
import { ActionType, PostDataType } from "../../../redux/state";
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
    props.dispatch({type: 'ADD-POST'});
  };

  const onPostChange = () => {
    props.dispatch({type: "UPDATE-POST-TEXT",newText: newPostElement.current ? newPostElement.current.value : ""
    });
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
