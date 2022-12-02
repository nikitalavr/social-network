import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  MessagesPageType,
  sendMessageAC,
  updateMessageTextAC,
} from "../../redux/messages-reducer";
import { RootState } from "../../redux/redux-store";
import { Messages } from "./Messages";

// export const MessagesContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         const sendMessage = () => {
//           store.dispatch(sendMessageAC());
//         };

//         const updateMessageText = (text: string) => {
//           store.dispatch(updateMessageTextAC(text));
//         };

//         return (
//           <Messages
//             messagesPageData={store.getState().messagesPage}
//             sendMessage={sendMessage}
//             updateMessageText={updateMessageText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

type MapStatePropsType = {
  messagesPageData: MessagesPageType;
}

type MapDispatchToPropsType = {
  sendMessage: () => void
  updateMessageText: (text: string) => void
}

const mapStateToProps = (state: RootState): MapStatePropsType => {
  return {
    messagesPageData: state.messagesPage,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    sendMessage: () => {
      dispatch(sendMessageAC());
    },
    updateMessageText: (text: string) => {
      dispatch(updateMessageTextAC(text));
    },
  };
};

export const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
