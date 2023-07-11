import React from "react";
import d from "./dialogs.module.css"
import {DialogsComponent} from "./dialodsName/dialogs-components";
import {storeType} from "../../../index";
import {ConteinerMessangesValue} from "./messanges-value/conteiner-messanges-value";

// export type dialogsType = {
//     dialogsPage: {
//         messages: Array<messagesType>
//         dialogsName: Array<DialogsNameType>
//         newMessage : string
//     }
//     dispatch: (action: ActionType) => void
// }
// export type messagesType = {
//     value: string
//     id: string
// }


export const Dialods = function (props: storeType) {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItem}>
                <DialogsComponent dialodsName={props.state.dialogsPage.dialogsName}/>
            </div>
            <div>
                <ConteinerMessangesValue
                    state={props.state}
                    dispatch={props.dispatch}
                />
            </div>
        </div>
    )
}

