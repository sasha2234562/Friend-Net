import React from "react";
import d from "./dialogs.module.css"
import {MessangesValue} from "./messanges-value/messanges-value";
import {DialogsComponent} from "./dialodsName/dialogs-components";
import {ActionType} from "../../../redux/store";
import {DialogsNameType} from "../../../index";

type propsType = {
    dialogsPage: {
        messages: Array<messagesType>
        dialogsName: Array<DialogsNameType>
        newMessage : string
    }
    dispatch: (action: ActionType) => void
}
type messagesType = {
    value: string
    id: string
}
export const Dialods = function (props: propsType) {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItem}>
                <DialogsComponent dialodsName={props.dialogsPage.dialogsName}/>
            </div>
            <div>
                <MessangesValue
                    messangesValue={props.dialogsPage.messages}
                    dispatch={props.dispatch}
                    newMessage={props.dialogsPage.newMessage}
                />
            </div>
        </div>
    )
}

