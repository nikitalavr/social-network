import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/Navigation/Navigation";
import {Profile} from "./components/Profile/Profile";
import {Messages} from "./components/Messages/Messages";


function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navigation/>
            <Profile/>
            <Messages />
        </div>
    );
}


export default App;
