import { handleServerAppError, handleServerNetworkError } from './../utils/error-utils';
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
        return state
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
  dispatch(setAppStatusAC("loading"));
  authAPI.me().then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(setAppStatusAC("succeeded"));
      dispatch(setIsLoggedInAC(true));
      dispatch(setIsInitializedAC(true));
    } else dispatch(setIsLoggedInAC(false));
  });
};

export const loginTC = (data: AuthLoginRequestType) => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC("loading"));
  authAPI.login(data).then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(setAppStatusAC("succeeded"));
      dispatch(setIsLoggedInAC(true));
      dispatch(setIsInitializedAC(true));
    } else {
      handleServerAppError(res.data, dispatch)
      dispatch(setIsLoggedInAC(false));
    }
  }).catch(error => {
    handleServerNetworkError(error, dispatch)
  });
};

export const logoutTC = () => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC("loading"));
  authAPI
    .logout()
    .then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(setIsLoggedInAC(false));
        dispatch(setAppStatusAC("succeeded"));
      } else {
        dispatch(setIsLoggedInAC(false));
        handleServerAppError(res.data, dispatch);
      }
    })
    .catch((error) => {
      handleServerNetworkError(error, dispatch);
    });
};

