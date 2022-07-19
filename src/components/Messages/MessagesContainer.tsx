import React from "react";
import {
  sendMessageAC,
  updateMessageTextAC,
} from "../../redux/messages-reducer";
import { Messages } from "./Messages";
import StoreContext from "../../store-context";

// type MessagesPropsType = {
//   messagesPageData: MessagesPageType;
//   dispatch: (action: ActionType) => void;
// };

export const MessagesContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const sendMessage = () => {
          store.dispatch(sendMessageAC());
        };

        const updateMessageText = (text: string) => {
          store.dispatch(updateMessageTextAC(text));
        };

        return (
          <Messages
            messagesPageData={store.getState().messagesPage}
            sendMessage={sendMessage}
            updateMessageText={updateMessageText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
