import React, { ChangeEvent, useState } from "react";
import { PostDataType } from "../../../redux/state";
import style from "../Profile.module.css";
import Post from "./Post/Post";

type MyPostPropsType = {
  postData: Array<PostDataType>;
  addPost: (postMessage: string) => void
};

const MyPosts = (props: MyPostPropsType) => {
  let [posts, setPost] = useState<Array<PostDataType>>(props.postData);
  let [inputState, setInputState] = useState<string>("")

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputState(e.currentTarget.value)
  };

  let newPostElement = React.createRef()
  const addPost = () => {
    let text = newPostElement.current.value
}

  let postsToRender = posts.map((p) => (
    <Post id={p.id} message={p.message} likes={p.likes} />
  ));
  

  return (
    <div className={style.posts_area}>
      My posts
      <div>
        <textarea ref={newPostElement} ></textarea>
        <button onClick={() => {}} >Add</button>
      </div>
      {postsToRender}
    </div>
  );
};

export default MyPosts;
