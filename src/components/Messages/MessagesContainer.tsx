import React from "react";
import { ActionType, MessagesPageType } from "../../redux/store";
import {
  sendMessageAC,
  updateMessageTextAC,
} from "../../redux/messages-reducer";
import { Messages } from "./Messages";

type MessagesPropsType = {
  messagesPageData: MessagesPageType;
  dispatch: (action: ActionType) => void;
};

export const MessagesContainer = (props: MessagesPropsType) => {
  const sendMessage = () => {
    props.dispatch(sendMessageAC());
  };

  const updateMessageText = (text: string) => {
    props.dispatch(updateMessageTextAC(text));
  };

  return (
    <Messages
      messagesPageData={props.messagesPageData}
      sendMessage={sendMessage}
      updateMessageText={updateMessageText}
    />
  );
};
