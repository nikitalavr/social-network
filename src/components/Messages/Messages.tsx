import React from "react";
import style from "./Messages.module.css";
import { MessageItem } from "./MessagesItem/MessagesItem";
import { DialogItem } from "./DialogsItem/DialogsItem";
import { ActionType, messagesPageType, sendMessageAC, updateMessageTextAC } from "../../redux/state";

type MessagesPropsType = {
  messagesPageData: messagesPageType;
  dispatch: (action: ActionType) => void;
};

export const Messages = (props: MessagesPropsType) => {
  let newMessageElement = React.createRef<HTMLTextAreaElement>();

  const sendMessage = () => {
    props.dispatch(sendMessageAC());
  };

  const onChangeHandler = () => {
    let text = newMessageElement.current ? newMessageElement.current.value : ""
    props.dispatch(updateMessageTextAC(text));
  };

  const messagesToRender = props.messagesPageData.messagesData.map((m) => (
    <MessageItem message={m.message} id={m.id} />
  ));

  const dialogsToRender = props.messagesPageData.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  return (
    <div className={style.messagesWrapper}>
      <div className={style.dialogs}>{dialogsToRender}</div>
      <div className={style.messages}>
        {messagesToRender}
        <textarea
          ref={newMessageElement}
          value={props.messagesPageData.newMessageText}
          onChange={onChangeHandler}
        ></textarea>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};
