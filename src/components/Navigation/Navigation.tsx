import React from "react";
import style from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../redux/redux-store";

export function Navigation() {
  const userId = useAppSelector(state => state.login.userId)
  return (
    <nav className={style.nav}>
      <div className={`${style.item} ${style.active}`}>
        <NavLink
          to={`/profile/${userId}`}
          className={(navData) =>
            navData.isActive ? style.active : style.item
          }
        >
          Profile
        </NavLink>
      </div>
      <div className={`${style.item} ${style.active}`}>
        <NavLink
          to="/news"
          className={(navData) =>
            navData.isActive ? style.active : style.item
          }
        >
          News
        </NavLink>
      </div>
      <div className={`${style.item} ${style.active}`}>
        <NavLink
          to="/messages"
          className={(navData) =>
            navData.isActive ? style.active : style.item
          }
        >
          Messages
        </NavLink>
      </div>
      <div className={`${style.item} ${style.active}`}>
        <NavLink
          to="/music"
          className={(navData) =>
            navData.isActive ? style.active : style.item
          }
        >
          Music
        </NavLink>
      </div>
      <div className={`${style.item} ${style.active}`}>
        <NavLink
          to="/settings"
          className={(navData) =>
            navData.isActive ? style.active : style.item
          }
        >
          Settings
        </NavLink>
      </div>
      <div className={`${style.item} ${style.active}`}>
        <NavLink
          to="/users"
          className={(navData) =>
            navData.isActive ? style.active : style.item
          }
        >
          Users
        </NavLink>
      </div>
    </nav>
  );
}
