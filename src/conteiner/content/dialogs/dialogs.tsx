import React, {useState} from "react";
import d from "./dialogs.module.css"
import {DilogsComponent} from "./dialogs-components";
import {v1} from "uuid";

type DialogsType={
    name: string
    id: string
}


export const Dialods = function () {


    const [message, setMessage] = useState<Array<DialogsType>>([
    {name: "Masha" , id : v1()},
    {name: "Dasha" , id : v1()},
    {name: "Sasha" , id :v1()},
    {name: "Eva" , id : v1()},
    {name: "Nastya" , id : v1()}
])

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItem}>
              <DilogsComponent messasge={message}/>
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

