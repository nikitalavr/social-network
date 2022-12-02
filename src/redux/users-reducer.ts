import { usersAPI, UserType } from "./../api/api";
import { Dispatch } from "redux";

type InitialStateType = {
  users: UserType[];
  page: number;
  count: number;
  totalPagesCount: number
};

const initialState: InitialStateType = {
  users: [],
  page: 1,
  count: 10,
  totalPagesCount: 0,
};

type FollowACType = ReturnType<typeof followAC>;
type UnfollowACType = ReturnType<typeof unfollowAC>;
type ShowMoreACType = ReturnType<typeof showMoreUsersAC>;
export type SetUsersACType = ReturnType<typeof setUsersAC>;
type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>;
type SetTotalCountACType = ReturnType<typeof setTotalCountAC>;

type ActionUserReduserType =
  | FollowACType
  | UnfollowACType
  | ShowMoreACType
  | SetUsersACType
  | SetCurrentPageACType
  | SetTotalCountACType;

export const usersReduser = (
  state: InitialStateType = initialState,
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
      return { ...state, users: [...action.payload.users] };
    case "USERS/SHOW-MORE-USERS":
      return {
        ...state,
        count: action.payload.usersCount,
      };
      case "USERS/SET-CURRENT-PAGE":
        return {
          ...state, page: action.payload.currentPage
        }
        case "USERS/SET-TOTAL-COUNT": {
          return {
            ...state, totalPagesCount: action.payload.totalPagesCount
          }
        }
    default:
      return state;
  }
};

export const followAC = (userID: number) => {
  return {
    type: "FOLLOW",
    payload: {
      userID,
    },
  } as const;
};
export const unfollowAC = (userID: number) => {
  return {
    type: "UNFOLLOW",
    payload: {
      userID,
    },
  } as const;
};
export const showMoreUsersAC = (usersCount: number) => {
  return {
    type: "USERS/SHOW-MORE-USERS",
    payload: {
      usersCount,
    },
  } as const;
};

export const setCurrentPageAC = (currentPage: number) => {
  return {
    type: "USERS/SET-CURRENT-PAGE",
    payload: {
      currentPage,
    },
  } as const;
};

export const setUsersAC = (users: Array<UserType>) => {
  return {
    type: "SET-USERS",
    payload: {
      users,
    },
  } as const;
};

export const setTotalCountAC = (totalPagesCount: number) => {
  return {
    type: "USERS/SET-TOTAL-COUNT",
    payload: {
      totalPagesCount
    }
  }as const
}

export const setUsersTC = (data: {
  count?: number;
  page?: number;
  term?: string;
  friend?: boolean;
}) => {
  return (dispatch: Dispatch<SetUsersACType | SetTotalCountACType>) => {
    usersAPI.get(data.count, data.page, data.term, data.friend).then((res) => {
      dispatch(setUsersAC(res.data.items));
      dispatch(setTotalCountAC(res.data.totalCount))
    });
  };
};
