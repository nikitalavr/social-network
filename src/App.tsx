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
import { ActionType, RootStateType } from "./redux/state";


type AppPropsType = {
  state: RootStateType
  // addPost: () => void
  // sendMessage: (messageText: string) => void
  // updateMessageText: (newText: string) => void
  // incLike: (postId: string, likeIsPressed: boolean) => void
  // onPostChange: (newText: string) => void
  dispatch:(action: ActionType) => void
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
              element={
                <Profile
                  postData={props.state.profilePage}
                  dispatch={props.dispatch}
                />
              }
            />
            <Route
              path="/messages"
              element={
                <Messages
                  messagesPageData={props.state.messagesPage}
                  dispatch={props.dispatch}
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
