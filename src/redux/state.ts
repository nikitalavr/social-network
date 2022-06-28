import { v1 } from "uuid";

let rerender = () => {};

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

export let state: RootStateType = {
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
};

export const subscribe = (observer: () => void) => {
  rerender = observer;
};

export const addPost = (postMessage: string) => {
  let newPost: PostDataType = {
    id: v1(),
    message: postMessage,
    likes: 0,
    likeIsPressed: false,
  };
  state.profilePage.myPosts.unshift(newPost);
  state.profilePage.newPostText = "";
  rerender();
};

export const sendMessage = (messageText: string) => {
  state.messagesPage.messagesData.push({ id: v1(), message: messageText });
  updateMessageText("");
  rerender();
};

export const updateMessageText = (newText: string) => {
  state.messagesPage.newMessageText = newText;
  rerender();
};

export const incLike = (postId: string, likeIsPressed: boolean) => {
  let likeIsPressedFlag = !likeIsPressed;
  console.log(likeIsPressedFlag);

  state.profilePage.myPosts.map((p) =>
    p.id === postId
      ? { ...p, likes: p.likes++, likeIsPressed: likeIsPressedFlag }
      : p
  );
  rerender();
};

export const onPostChange = (newText: string) => {
  state.profilePage.newPostText = newText;
  rerender();
};
