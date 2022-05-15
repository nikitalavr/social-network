import React from "react";
import style from "./Messages.module.css";

export const Messages = () => {
    return (
        <div className={style.messagesWrapper}>
            <div className={style.dialogs}>
                <h4>My messages</h4>
                <div className={style.dialog}>
                    number1
                </div>
                <div className={style.dialog}>
                    number2
                </div>
                <div className={style.dialog}>
                    number3
                </div>
                <div className={style.dialog}>
                    number4
                </div>
                <div className={style.dialog}>
                    number5
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