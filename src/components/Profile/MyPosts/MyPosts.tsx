import React from "react";
import { PostDataType } from "../../../redux/state";
import style from "../Profile.module.css";
import Post from "./Post/Post";

type MyPostPropsType = {
  postData: Array<PostDataType>;
  newPostText: string;
  addPost: (postMessage: string) => void;
  onPostChange: (t:string) => void
};

const MyPosts = (props: MyPostPropsType) => {
  
  let newPostElement = React.createRef<HTMLTextAreaElement>();
  const addPost = () => {
    props.addPost(newPostElement.current ? newPostElement.current.value : "");
  };
  
  const onPostChange = () => {
    props.onPostChange(newPostElement.current ? newPostElement.current.value : "")
  }

  let postsToRender = props.postData.map((p) => (
    <Post id={p.id} message={p.message} likes={p.likes} likeIsPressed={p.likeIsPressed} />
  ));

  return (
    <div className={style.posts_area}>
      My posts
      <div>
        <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}></textarea>
        <button onClick={addPost}>Add</button>
      </div>
      {postsToRender}
    </div>
  );
};

export default MyPosts;
