import React from "react";
import { MessageItemPropsType } from "../../../redux/state";
import style from "./../Messages.module.css";



export function MessageItem (props: MessageItemPropsType) {
    return <div className={style.message}>{props.message}</div>
}





