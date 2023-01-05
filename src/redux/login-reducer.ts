import { authAPI, AuthLoginRequestType } from "./../api/api";
import { Dispatch } from "redux";

const initialState = {
  isLoggedIn: false,
  userId: 0,
};

type InitialStateType = typeof initialState;

export const loginReducer = (
  state: InitialStateType = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case "LOGIN/SET-IS-LOGGED-IN":
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
      };
    case "LOGIN/SET-USER-ID":
      return {
        ...state,
        userId: action.payload.userId,
      }
    default:
      return state;
  }
};

type ActionType = SetIsLoggedInACType | SetUserIdACType;

type SetIsLoggedInACType = ReturnType<typeof setIsLoggedInAC>;
type SetUserIdACType = ReturnType<typeof setUserIdAC>;

const setIsLoggedInAC = (isLoggedIn: boolean) => {
  return {
    type: "LOGIN/SET-IS-LOGGED-IN",
    payload: {
      isLoggedIn,
    },
  } as const;
};

const setUserIdAC = (userId: number) => {
  return {
    type: "LOGIN/SET-USER-ID",
    payload: {
      userId
    } 
  } as const
}

//Thunks on login-logout
export const initializeAppTC = () => (dispatch: Dispatch) => {
  authAPI.me().then((res) => {
    if(res.data.resultCode === 0) {
      dispatch(setUserIdAC(res.data.data.id))
      
    } else {
      dispatch(setIsLoggedInAC(false))
    }   
  });
};

export const loginTC = (data: AuthLoginRequestType) => (dispatch: Dispatch) => {
  authAPI.login(data).then((res) => {
    dispatch(setIsLoggedInAC(true));
    dispatch(setUserIdAC(res.data.data.userId))
  });
};

export const logoutTC = () => (dispatch: Dispatch) => {
  authAPI
    .logout()
    .then((res) => {
      dispatch(setIsLoggedInAC(false))
    })
};
