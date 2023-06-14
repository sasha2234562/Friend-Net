import React from "react";
import d from "./dialogs.module.css"
import {MessangesValue} from "./messanges-value/messanges-value";
import {DialogsComponent} from "./dialodsName/dialogs-components";

// type dialogsPageType = {
//     dialogs : {
//         dialogsName: Array<DialogsType>
//         messanges: Array<messangesValueType>
//     }
// }
//
// type DialogsType = {
//     name: string
//     id: string
// }
// type messangesValueType = {
//     value: string
//     id: string
// }

type propsType = {
    messages: Array<messagesType>
}
type messagesType = {
    value: string
    id: string
}
export const Dialods = function (props: propsType) {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItem}>
                {/*<DialogsComponent dialodsName={props.dialogs.dialogsName}/>*/}
            </div>
            <div>
                <MessangesValue messangesValue={props.messages}/>
            </div>
        </div>
    )
}

