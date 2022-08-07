import React, { useEffect } from "react";
import { v1 } from "uuid";
import { UserDataType } from "../../redux/users-reducer";

type UsersPropsType = {
  users: Array<UserDataType>;
  follow: (userID: string) => void;
  unfollow: (userID: string) => void;
  setUsers: (users: Array<UserDataType>) => void;
};

export default function Users(props: UsersPropsType) {
  if(props.users.length === 0) props.setUsers([
    {
      id: v1(),
      avatar: "avatar",
      fullName: "Nikita",
      location: { city: "Astrakhan", country: "Russia" },
      status: "fine",
      followStatus: false,
    },
  ]);
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.avatar} alt="ava" />
            </div>
            <div>
              {u.followStatus ? (
                <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
              ) : (
                <button onClick={() => props.follow(u.id)}>Follow</button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}
