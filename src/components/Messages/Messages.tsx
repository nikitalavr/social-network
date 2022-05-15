import React from "react";
import style from "./Messages.module.css";
import {NavLink} from "react-router-dom";

export const Messages = () => {
    return (
        <div className={style.messagesWrapper}>
            <div className={style.dialogs}>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/1">number1</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/2">number2</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/3">number3</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/4">number4</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/5">number5</NavLink>
                </div>

            </div>
            <div className={style.messages}>
                <div className={style.message}>message1</div>
                <div className={style.messageResponse}>message2</div>
                <div className={style.message}>message3</div>
                <div className={style.messageResponse}>message4</div>
                <div className={style.messageResponse}>message4</div>
            </div>
        </div>
    )
}