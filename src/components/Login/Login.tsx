import React from "react";

import style from "./Header.module.css";

export default function Login() {
  return (
    <div>
      <div className={style.welcomeText}>
        <h1>Welcome</h1>
        <p>
          To log in get registered
          <a href={"https://social-network.samuraijs.com/"} target={"_blank"} rel="noreferrer">
            {" "}
            here
          </a>
        </p>
        <p>or use common test account credentials:</p>
        <p>Email: free@samuraijs.com</p>
        <p>Password: free</p>
      </div>
      <div className={style.form}>
        
      </div>
    </div>
  );
}
