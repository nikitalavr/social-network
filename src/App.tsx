import React, { useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import  UserProfile  from "./components/Profile/UserProfile/UserProfile";
import { Navigate, Route, Routes } from "react-router-dom";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { MessagesContainer } from "./components/Messages/MessagesContainer";
import  UsersContainer  from "./components/Users/UsersContainer";
import { initializeAppTC } from "./redux/login-reducer";
import { useAppDispatch, useAppSelector } from "./redux/redux-store";
import { Login } from "./components/Login/Login";

function App() {
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn)
  const dispatch = useAppDispatch()
  useEffect(()=> {
    dispatch(initializeAppTC())
  }, [dispatch])
  console.log(isLoggedIn);
  
  return (
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
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
