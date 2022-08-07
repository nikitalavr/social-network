import axios from "axios";
import React from "react";
import { UserDataType } from "../../redux/users-reducer";

type UsersPropsType = {
  users: Array<UserDataType>;
  follow: (userID: number) => void;
  unfollow: (userID: number) => void;
  setUsers: (users: Array<UserDataType>) => void;
};

export default function Users(props: UsersPropsType) {
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        props.setUsers(response.data.items);
      });

    // props.setUsers([
    //   {
    //     id: v1(),
    //     avatar: "avatar",
    //     fullName: "Nikita",
    //     location: { city: "Astrakhan", country: "Russia" },
    //     status: "fine",
    //     followStatus: false,
    //   },
    // ]);
  }
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photos.small} alt="ava" />
            </div>
            <div>
              {u.followed ? (
                <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
              ) : (
                <button onClick={() => props.follow(u.id)}>Follow</button>
              )}
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
