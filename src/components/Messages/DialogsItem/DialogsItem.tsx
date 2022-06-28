import React from "react";
import style from "./../Messages.module.css";
import {NavLink} from "react-router-dom";
import { DialogItemPropsType } from "../../../redux/state";


export function DialogItem (props: DialogItemPropsType) {

    return <div key={props.id} className={style.dialog}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
}





















