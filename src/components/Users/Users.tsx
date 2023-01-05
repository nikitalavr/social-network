import React from "react";
import { NavLink } from "react-router-dom";
import { UserType } from "../../api/api";
import Paginator from "./Paginator";
import default_avatar from "./../../assets/defaults/default_avatar.jpeg"

type UsersPropsType = {
  users: Array<UserType>;
  setCurrentPage: (page: number) => void;
  totalPagesCount: number;
  currentPage: number;
  count: number;
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
              <img src={u.photos.small ? u.photos.small : default_avatar}  alt="ava"/>
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
