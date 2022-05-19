import React from "react";
import style from "./Messages.module.css";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}
type MessageItemPropsType = {
    message: string
    id: number
}

const dialogsData = [
    {id: 1, name: "Dmitriy"},
    {id: 2, name: "Kate"},
    {id: 3, name: "Nikita"},
    {id: 4, name: "Valeriy"},
    {id: 5, name: "Alexander"},
    {id: 6, name: "Dmitry"},
]

const messagesData = [
    {id: 1, message: "message1"},
    {id: 2, message: "message2"},
    {id: 3, message: "message3"},
    {id: 4, message: "messagelsdkjflksdfj"},
    {id: 5, message: "message5 asdlfkasklfgkln"},
    {id: 6, message: "message6"},
]

/*const dialogsToRender = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)*/
function DialogItem (props: DialogItemPropsType) {

    return <div className={style.dialog}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
}
function MessageItem (props: MessageItemPropsType) {
    return <div className={style.message}>{props.message}</div>
}

const messagesToRender = messagesData.map(m => <MessageItem message={m.message} id={m.id}/>)

const dialogsToRender = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)

export const Messages = () => {
    return (
        <div className={style.messagesWrapper}>
            <div className={style.dialogs}>
                {dialogsToRender}
            </div>
            <div className={style.messages}>
                {messagesToRender}
            </div>
        </div>
    )
}





















