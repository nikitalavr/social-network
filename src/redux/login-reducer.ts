import {
  handleServerAppError,
  handleServerNetworkError,
} from "./../utils/error-utils";
import { setIsInitializedAC, setAppStatusAC } from "./app-reducer";
import { authAPI, AuthLoginRequestType } from "./../api/api";
import { Dispatch } from "redux";

const initialState = {
  isLoggedIn: false,
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
    default:
      return state;
  }
};

type ActionType = SetIsLoggedInACType;

type SetIsLoggedInACType = ReturnType<typeof setIsLoggedInAC>;

const setIsLoggedInAC = (isLoggedIn: boolean) => {
  return {
    type: "LOGIN/SET-IS-LOGGED-IN",
    payload: {
      isLoggedIn,
    },
  } as const;
};

//need to add resultCode=1 case
export const initializeAppTC = () => (dispatch: Dispatch) => {
  authAPI.me().then((res) => {
      dispatch(setIsLoggedInAC(true));      
  });
};

export const loginTC = (data: AuthLoginRequestType) => (dispatch: Dispatch) => {
  authAPI.login(data).then((res) => {
    dispatch(setIsLoggedInAC(true));
  });
};

export const logoutTC = () => (dispatch: Dispatch) => {
  authAPI
    .logout()
    .then((res) => {
      dispatch(setIsLoggedInAC(false))
    })
};
