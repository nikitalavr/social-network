import { combineReducers, createStore } from "redux";
import { messagesReducer } from "./messages-reducer";
import { profileReducer } from "./profile-reducer";
import { usersReduser } from "./users-reducer";



let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  users: usersReduser,
});

export type RootState = typeof reducers;

export type ReduxStateType = ReturnType<RootState>

let store = createStore(reducers);



export default store;
