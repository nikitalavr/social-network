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
};

export type messagesPageType = {
  dialogsData: Array<DialogItemPropsType>;
  messagesData: Array<MessageItemPropsType>;
};

export type profilePageType = {
  myPosts: Array<PostDataType>;
};

type rootStateType = {
  messagesPage: messagesPageType;
  profilePage: profilePageType;
};

export let state: rootStateType = {
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
  },
  profilePage: {
    myPosts: [
      { id: v1(), message: "New message1", likes: 0 },
      { id: v1(), message: "New message2", likes: 3 },
      { id: v1(), message: "New message3", likes: 4 },
      { id: v1(), message: "New message4", likes: 17 },
      { id: v1(), message: "New message4", likes: 17 },
      { id: v1(), message: "New message4", likes: 17 },
      { id: v1(), message: "New message4", likes: 17 },
      { id: v1(), message: "New message4", likes: 17 },
      { id: v1(), message: "New message4", likes: 17 },
    ],
  },
};


export const addPost = (postMessage: string) => {
  let newPost = { id: v1(), message: postMessage, likes: 0 };
  state.profilePage.myPosts.push(newPost)
};
