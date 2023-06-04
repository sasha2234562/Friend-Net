import React from "react";
import d from "./dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogsType = {
    name: string
    id: number

}


const DilogsComponent = (props: DialogsType) => {
    debugger
    return (
        <div className={d.dialog}><NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink></div>
    )
}
export const Dialods = function () {
    debugger
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItem}>
                <DilogsComponent id={1} name={"Masha"}/>
                <DilogsComponent id={2} name={"Dasha"}/>
                <DilogsComponent id={3} name={"Sasha"}/>
                <DilogsComponent id={4} name={"Alina"}/>
                <DilogsComponent id={5} name={"Arina"}/>
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

