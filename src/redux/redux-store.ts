
import thunk, { ThunkDispatch } from 'redux-thunk';
import { loginReducer } from './login-reducer';
import { appReducer } from './app-reducer';
import { AnyAction, applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { messagesReducer } from "./messages-reducer";
import { profileReducer } from "./profile-reducer";
import { usersReduser } from "./users-reducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';




const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  users: usersReduser,
  app: appReducer,
  login: loginReducer,
});



//export const store = configureStore({reducer: reducers})

export const store = legacy_createStore(reducers, applyMiddleware(thunk))

//export type ReduxStateType = ReturnType<RootState>

export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>






export default store;
