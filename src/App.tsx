import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { Profile } from "./components/Profile/Profile";
import { Messages } from "./components/Messages/Messages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import {
  DialogItemPropsType,
  MessageItemPropsType,
  PostDataType,
} from "./redux/state";

type AppPropsType = {
  dialogsData: Array<DialogItemPropsType>;
  messagesData: Array<MessageItemPropsType>;
  postData: Array<PostDataType>;
  addPost: (postMessage: string) => void
};

function App(props: AppPropsType) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/profile"
              element={<Profile postData={props.postData} addPost={props.addPost}/>}
            />
            <Route
              path="/messages"
              element={
                <Messages
                  dialogsData={props.dialogsData}
                  messagesData={props.messagesData}
                />
              }
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
