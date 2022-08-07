import { v1 } from "uuid";

export type LocationType = {
  city: string;
  country: string;
};

export type UserDataType = {
  id: string;
  avatar: string;
  fullName: string;
  location: LocationType;
  status: string;
  followStatus: boolean;
};

export type UsersStateType = {
  users: Array<UserDataType>;
};

const initialState: UsersStateType = {
  users: [
//     {
//       id: v1(),
//       avatar: "avatar",
//       fullName: "Nikita",
//       location: { city: "Astrakhan", country: "Russia" },
//       status: "fine",
//       followStatus: false,
//     },
  ],
};

type FollowACType = ReturnType<typeof followAC>;
type UnfollowACType = ReturnType<typeof unfollowAC>;
type ShowMoreACType = ReturnType<typeof showMoreAC>;
type SetUsersACType = ReturnType<typeof setUsersAC>;

type ActionUserReduserType =
  | FollowACType
  | UnfollowACType
  | ShowMoreACType
  | SetUsersACType;

export const usersReduser = (
  state: UsersStateType = initialState,
  action: ActionUserReduserType
) => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload.userID ? { ...u, followStatus: true } : u
        ),
      };
    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload.userID ? { ...u, followStatus: false } : u
        ),
      };
    case "SET-USERS":
        return {...state, users: [...state.users, ...action.payload.users]}
    case "SHOW-MORE-USERS":
      return state;
    default:
      return state;
  }
};

export const followAC = (userID: string) => {
  return {
    type: "FOLLOW",
    payload: {
      userID,
    },
  } as const;
};
export const unfollowAC = (userID: string) => {
  return {
    type: "UNFOLLOW",
    payload: {
      userID,
    },
  } as const;
};
export const showMoreAC = (userID: string) => {
  return {
    type: "SHOW-MORE-USERS",
    payload: {
      userID,
    },
  } as const;
};

export const setUsersAC = (users: Array<UserDataType>) => {
  return {
    type: "SET-USERS",
    payload: {
      users,
    },
  } as const;
};
