import React, { useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import UserProfile from "./components/Profile/UserProfile/UserProfile";
import { Route, Routes } from "react-router-dom";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { MessagesContainer } from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import { useAppDispatch, useAppSelector } from "./redux/redux-store";
import { stat } from "fs";
import { initializeAppTC } from "./redux/login-reducer";

function App() {
  const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn);
  const dispatch = useAppDispatch()
  
  useEffect(()=>{
    dispatch(initializeAppTC())
  },[dispatch])
  

  return isLoggedIn ? (
    <div className="app-wrapper">
      <Header />
      <Navigation />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile/:userid" element={<UserProfile />} />
          <Route path="/messages" element={<MessagesContainer />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  ) : (
    <div className="app-wrapper">
      <Login />
    </div>
  );
}

export default App;
