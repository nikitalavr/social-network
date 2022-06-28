import React from "react";
import style from "./Messages.module.css";
import { MessageItem } from "./MessagesItem/MessagesItem";
import { DialogItem } from "./DialogsItem/DialogsItem";
import { DialogItemPropsType, MessageItemPropsType } from "../../redux/state";

type MessagesPropsType = {
  dialogsData: Array<DialogItemPropsType>;
  messagesData: Array<MessageItemPropsType>;
};

export const Messages = (props: MessagesPropsType) => {
  const messagesToRender = props.messagesData.map((m) => (
    <MessageItem message={m.message} id={m.id} />
  ));

  const dialogsToRender = props.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  return (
    <div className={style.messagesWrapper}>
      <div className={style.dialogs}>{dialogsToRender}</div>
      <div className={style.messages}>{messagesToRender}</div>
    </div>
  );
};
