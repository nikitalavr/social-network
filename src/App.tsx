import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { Profile } from "./components/Profile/Profile";
import { Route, Routes } from "react-router-dom";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { MessagesContainer } from "./components/Messages/MessagesContainer";
import { UsersContainer } from "./components/Users/UsersContainer";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navigation />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<MessagesContainer />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
