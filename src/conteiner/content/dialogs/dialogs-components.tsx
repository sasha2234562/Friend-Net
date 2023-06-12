import d from "./dialogs.module.css";
import {NavLink} from "react-router-dom";
import React, {useState} from "react";

type messageType = {
    messasge : Array<DialogsType>
}

type DialogsType = {
    name: string
    id: number

}

export const DilogsComponent = () => {


    const [message, setMessage] = useState<Array<DialogsType>>([
        {name: "Masha" , id : 1},
        {name: "Dasha" , id : 2},
        {name: "Sasha" , id : 3},
        {name: "Eva" , id : 4},
        {name: "Nastya" , id : 5}
    ])
    return (
        <div>
            {message.map((item)=> {
                return(
                    <div key={item.id} className={d.dialog}><NavLink to={`/dialogs/${item.id}`}>{item.name}</NavLink></div>
                )
            })}
            {/*<div className={d.dialog}><NavLink to={`/dialogs/${message[0].id}`}>{message[0].name}</NavLink></div>*/}
            {/*<div className={d.dialog}><NavLink to={`/dialogs/${message[1].id}`}>{message[1].name}</NavLink></div>*/}
            {/*<div className={d.dialog}><NavLink to={`/dialogs/${message[2].id}`}>{message[2].name}</NavLink></div>*/}
            {/*<div className={d.dialog}><NavLink to={`/dialogs/${message[3].id}`}>{message[3].name}</NavLink></div>*/}
            {/*<div className={d.dialog}><NavLink to={`/dialogs/${message[4].id}`}>{message[4].name}</NavLink></div>*/}
        </div>
    )
}