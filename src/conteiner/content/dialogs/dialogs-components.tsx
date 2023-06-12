import d from "./dialogs.module.css";
import {NavLink} from "react-router-dom";

type messageType = {
    messasge : Array<DialogsType>
}

type DialogsType = {
    name: string
    id: string

}

export const DilogsComponent = (props: messageType) => {
        return (
        <div>
            {props.messasge.map((item)=> {
                return(
                    <div key={item.id} className={d.dialog}><NavLink to={`/dialogs/${item.id}`}>{item.name}</NavLink></div>
                )
            })}
        </div>
    )
}