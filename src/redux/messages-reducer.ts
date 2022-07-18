import { v1 } from "uuid";
import { ActionType, MessagesPageType } from "./state";

export type SendMessageActionType = ReturnType<typeof sendMessageAC>;
export type UpdateMessageTextActionType = ReturnType<
  typeof updateMessageTextAC
>;

export const messagesReducer = (
  state: MessagesPageType,
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
