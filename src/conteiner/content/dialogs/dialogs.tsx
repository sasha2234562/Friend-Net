import React, {useState} from "react";
import d from "./dialogs.module.css"
import {DilogsComponent} from "./dialodsName/dialogs-components";
import {v1} from "uuid";
import {MessangesValue} from "./messanges-value/messanges-value";

type DialogsType = {
    name: string
    id: string
}
type messangesValueType= {
    value : string
    id : string
}

export const Dialods = function () {


    const [dialodsName, setMessage] = useState<Array<DialogsType>>([
        {name: "Masha", id: v1()},
        {name: "Dasha", id: v1()},
        {name: "Sasha", id: v1()},
        {name: "Eva", id: v1()},
        {name: "Nastya", id: v1()}
    ])

    const [messangesValue, setMassangesValue] = useState<Array<messangesValueType>>([
        {value: 'Hello',id: v1()},
        {value: 'Bye',id: v1()},
        {value: 'Good',id: v1()},
        {value: 'Yo',id: v1()},
        {value: 'Thank you',id: v1()}
    ])

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItem}>
                <DilogsComponent dialodsName={dialodsName}/>
            </div>
            <div>
                <MessangesValue messangesValue={messangesValue}/>
            </div>
        </div>
    )
}

