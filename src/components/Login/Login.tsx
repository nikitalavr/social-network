import React from "react";
import { useFormik } from "formik";

import style from "./Login.module.css";
import { useAppDispatch } from "../../redux/redux-store";
import { loginTC } from "../../redux/login-reducer";

export default function Login() {
  const dispatch = useAppDispatch()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: values => {
      dispatch(loginTC({email: values.email, password: values.password}))
    },
  });
  return (
    <div>
      <div className={style.welcomeText}>
        <h1>Welcome</h1>
        <p>
          To log in get registered
          <a
            href={"https://social-network.samuraijs.com/"}
            target={"_blank"}
            rel="noreferrer"
          >
            {" "}
            here
          </a>
        </p>
        <p>or use common test account credentials:</p>
        <p>Email: free@samuraijs.com</p>
        <p>Password: free</p>
      </div>
      <div className={style.form}>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
