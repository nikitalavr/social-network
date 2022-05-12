import React from "react";
import style from "../Profile.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={style.posts_area}>
            My posts
            <div>
                <input type="text"/>
                <button>Add</button>
            </div>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>

    );

}

export default MyPosts