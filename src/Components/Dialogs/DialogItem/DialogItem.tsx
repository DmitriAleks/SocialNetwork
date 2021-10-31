import React from "react";
import {NavLink} from "react-router-dom";
import { DialogType } from "../../../redux/dialogs-reducer";
import s from './../Dialogs.module.css'



const DialogItem = (props: DialogType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;