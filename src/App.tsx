import React, { useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { MessagesContainer } from "./components/Messages/MessagesContainer";
import  UsersContainer  from "./components/Users/UsersContainer";
import { initializeAppTC } from "./redux/login-reducer";
import { useAppDispatch, useAppSelector } from "./redux/redux-store";
import Login from "./components/Login/Login";
import UserProfileContainer from "./components/Profile/UserProfile/UserProfileContainer";

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
          <Route path="/profile/:userId" element={<UserProfileContainer />} />
          <Route path="/messages" element={<MessagesContainer />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/login" element={<Login />} />
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
