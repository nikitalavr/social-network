import React from "react";
import { Navigate, NavLink } from "react-router-dom";
import { UserType } from "../../api/api";
import style from "./Users.module.css";

type UsersPropsType = {
  users: Array<UserType>;
  setCurrentPage: (page: number) => void;
  totalPagesCount: number;
  currentPage: number;
  count: number;
  navigateToUserProfile: () => void
};

export default function Users(props: UsersPropsType) {
  let pageNumberToRender = [];

  for (let i = 1; i <= Math.ceil(props.totalPagesCount / props.count); i++) {
    pageNumberToRender.push(
      <span
        onClick={() => {
          props.setCurrentPage(i);
        }}
        className={props.currentPage === i ? style.selectedPage : ""}
      >
        {i}{" "}
      </span>
    );
  }

  
  return (
    <div>
      <div>{pageNumberToRender}</div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
              <img src={u.photos.small} alt="ava"/>
              </NavLink>
            </div>
            <div>
              {u.followed ? <button>Unfollow</button> : <button>Follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}
