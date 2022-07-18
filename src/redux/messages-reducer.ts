import { v1 } from "uuid";
import { ActionType, MessagesPageType } from "./store";

export type SendMessageActionType = ReturnType<typeof sendMessageAC>;
export type UpdateMessageTextActionType = ReturnType<
  typeof updateMessageTextAC
>;

let initialState = {
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
}

export const messagesReducer = (
  state: MessagesPageType = initialState,
  action: ActionType
): MessagesPageType => {
  switch (action.type) {
    case "SEND-MESSAGE":
      state.messagesData.push({
        id: v1(),
        message: state.newMessageText,
      });
      state.newMessageText = "";
      break;
    case "UPDATE-MESSAGE-TEXT":
      state.newMessageText = action.newText;
      break;
    default:
      return state;
  }
  return state;
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
