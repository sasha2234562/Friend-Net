import React from "react";
import d from "./dialogs.module.css"
import {NavLink} from "react-router-dom";

export const Dialods = function (props: any) {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItem}>
                <div className={d.dialog}><NavLink to={'/dialogs/1'}>Masha</NavLink></div>
                <div className={d.dialog}><NavLink to={'/dialogs/2'}>Dasha</NavLink></div>
                <div className={d.dialog}><NavLink to={'/dialogs/3'}>Sasha</NavLink></div>
                <div className={d.dialog}><NavLink to={'/dialogs/4'}>Sveta</NavLink></div>
                <div className={d.dialog}><NavLink to={'/dialogs/5'}>Nastya</NavLink></div>
            </div>
            <div className={d.messangesItem}>
                <div className={d.messange}>Hello</div>
                <div className={d.messange}>Bye</div>
                <div className={d.messange}>How are you?</div>
                <div className={d.messange}>Good</div>
                <div className={d.messange}>Go to bed</div>
            </div>
        </div>
    )
}

