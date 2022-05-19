import React from "react";
import style from "../Profile.module.css";
import Post, {PostPropsType} from "./Post/Post";

type MyPostPropsType = {

}

const MyPosts = (props: MyPostPropsType) => {
    return (
        <div className={style.posts_area}>
            My posts
            <div>
                <input type="text"/>
                <button>Add</button>
            </div>
            <Post id={1} message={"New message in new project"} likes={21}/>
            <Post id={2} message={"New message in new project"} likes={21}/>
            <Post id={3} message={"New message in new project"} likes={21}/>
            <Post id={4} message={"New message in new project"} likes={21}/>
        </div>

    );

}

export default MyPosts