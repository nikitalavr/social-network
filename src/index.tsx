import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, state } from './redux/state';

ReactDOM.render(
    <App dialogsData={state.messagesPage.dialogsData} messagesData={state.messagesPage.messagesData} postData={state.profilePage.myPosts} addPost = {addPost} />,
    document.getElementById('root')
);
