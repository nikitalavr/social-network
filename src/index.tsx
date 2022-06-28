import React from "react";
import { state, subscribe } from "./redux/state";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

let rerenderEntireTree = () => {
  ReactDOM.render(<App state={state} />, document.getElementById("root"));
};

rerenderEntireTree();

subscribe(rerenderEntireTree);
