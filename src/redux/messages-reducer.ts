import { v1 } from "uuid";

export type MessageItemPropsType = {
  message: string;
  id: string;
};

export type DialogItemPropsType = {
  name: string;
  id: string;
};

export type MessagesPageType = {
  dialogsData: Array<DialogItemPropsType>;
  messagesData: Array<MessageItemPropsType>;
  newMessageText: string;
};

export type SendMessageActionType = ReturnType<typeof sendMessageAC>;
export type UpdateMessageTextActionType = ReturnType<
  typeof updateMessageTextAC
>;

export type ActionType = SendMessageActionType | UpdateMessageTextActionType;

let initialState: MessagesPageType = {
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
};

export const messagesReducer = (
  state: MessagesPageType = initialState,
  action: ActionType
): MessagesPageType => {
  switch (action.type) {
    case "SEND-MESSAGE":
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          { id: v1(), message: state.newMessageText },
        ],
        newMessageText: "",
      };

    case "UPDATE-MESSAGE-TEXT":
      return { ...state, newMessageText: action.newText };
    default:
      return state;
  }
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
