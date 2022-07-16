import { v1 } from "uuid";

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
export type messagesPageType = {
  dialogsData: Array<DialogItemPropsType>;
  messagesData: Array<MessageItemPropsType>;
  newMessageText: string;
};
export type profilePageType = {
  myPosts: Array<PostDataType>;
  newPostText: string;
};
export type RootStateType = {
  messagesPage: messagesPageType;
  profilePage: profilePageType;
};

export type AddPostActionType = ReturnType<typeof addPostAC>
export type SendMessageActionType = ReturnType<typeof sendMessageAC>
export type UpdateMessageTextActionType = ReturnType<typeof updateMessageTextAC>
export type IncLikeActionType = ReturnType<typeof incLikeAC>
export type UpdatePostTextActionType = ReturnType<typeof updatePostTextAC>

export type ActionType =
  | AddPostActionType
  | SendMessageActionType
  | UpdateMessageTextActionType
  | IncLikeActionType
  | UpdatePostTextActionType;

export type StoreType = {
  _state: RootStateType;
  getState: () => RootStateType;
  _rerender: () => void;
  subscribe: (observer: () => void) => void;
  dispatch: (action: ActionType) => void;
};



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
    switch (action.type) {
      case "ADD-POST":
        let newPost: PostDataType = {
          id: v1(),
          message: this._state.profilePage.newPostText,
          likes: 0,
          likeIsPressed: false,
        };
        this._state.profilePage.myPosts.unshift(newPost);
        this._state.profilePage.newPostText = "";
        this._rerender();
        break;
      case "SEND-MESSAGE":
        this._state.messagesPage.messagesData.push({
          id: v1(),
          message: this._state.messagesPage.newMessageText,
        });
        this._state.messagesPage.newMessageText = "";
        this._rerender();
        break;
      case "UPDATE-MESSAGE-TEXT":
        this._state.messagesPage.newMessageText = action.newText;
        this._rerender();
        break;
      case "INC-LIKE":
        let likeIsPressedFlag = !action.likeIsPressed;
        console.log(likeIsPressedFlag);

        this._state.profilePage.myPosts.map((p) =>
          p.id === action.postID
            ? { ...p, likes: p.likes++, likeIsPressed: likeIsPressedFlag }
            : p
        );
        this._rerender();
        break;
      case "UPDATE-POST-TEXT":
        this._state.profilePage.newPostText = action.newText;
        this._rerender();
        break;
    }
  },
};

export const addPostAC = () => {
  return {
    type: "ADD-POST",
  } as const;
};
export const sendMessageAC = () => {
  return {
    type: "SEND-MESSAGE",
  } as const;
};
export const updateMessageTextAC = (newText: string) => {
  return {
    type: "UPDATE-MESSAGE-TEXT",
    newText,
  } as const;
};
export const incLikeAC = (postID: string, likeIsPressed: boolean) => {
  return {
    type: "INC-LIKE",
    postID,
    likeIsPressed,
  } as const;
};
export const updatePostTextAC = (newText: string) => {
  return {
    type: "UPDATE-POST-TEXT",
    newText
  } as const
}


