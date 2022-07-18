import { v1 } from "uuid";
import {
  messagesReducer,
  SendMessageActionType,
  UpdateMessageTextActionType,
} from "./messages-reducer";
import {
  AddPostActionType,
  IncLikeActionType,
  profileReducer,
  UpdatePostTextActionType,
} from "./profile-reducer";

export type DialogItemPropsType = {
  name: string;
  id: string;
};
export type MessageItemPropsType = {
  message: string;
  id: string;
};
export type PostDataType = {
  id: string;
  message: string;
  likes: number;
  likeIsPressed: boolean;
};
export type MessagesPageType = {
  dialogsData: Array<DialogItemPropsType>;
  messagesData: Array<MessageItemPropsType>;
  newMessageText: string;
};
export type ProfilePageType = {
  myPosts: Array<PostDataType>;
  newPostText: string;
};
export type RootStateType = {
  messagesPage: MessagesPageType;
  profilePage: ProfilePageType;
};
export type StoreType = {
  _state: RootStateType;
  getState: () => RootStateType;
  _rerender: () => void;
  subscribe: (observer: () => void) => void;
  dispatch: (action: ActionType) => void;
};

export type ActionType =
  | AddPostActionType
  | IncLikeActionType
  | UpdatePostTextActionType
  | UpdateMessageTextActionType
  | SendMessageActionType;



export let store: StoreType = {
  _state: {
    messagesPage: {
      dialogsData: [
        { id: v1(), name: "Dmitriy" },
        { id: v1(), name: "Kate" },
        { id: v1(), name: "Nikita" },
        { id: v1(), name: "Valeriy" },
        { id: v1(), name: "Alexander" },
        { id: v1(), name: "Dmitry" },
      ],
      messagesData: [
        { id: v1(), message: "message1" },
        { id: v1(), message: "message2" },
        { id: v1(), message: "message3" },
        { id: v1(), message: "messagelsdkjflksdfj" },
        { id: v1(), message: "message5 asdlfkasklfgkln" },
        { id: v1(), message: "message6" },
      ],
      newMessageText: "",
    },
    profilePage: {
      myPosts: [
        { id: v1(), message: "New message1", likes: 0, likeIsPressed: false },
      ],
      newPostText: "",
    },
  },
  getState() {
    return this._state;
  },
  subscribe(observer: () => void) {
    this._rerender = observer;
  },
  _rerender() {},
  dispatch(action: ActionType) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(
      this._state.messagesPage,
      action
    );
    this._rerender();
  },
};
