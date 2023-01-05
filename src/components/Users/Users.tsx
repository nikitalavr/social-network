import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { UserType } from "../../api/api";
import Paginator from "./Paginator";
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

  
  return (
    <div>
      <Paginator totalPagesCount={props.totalPagesCount} portionSize={props.count} currentPage={props.currentPage} setCurrentPage={props.setCurrentPage} />
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
