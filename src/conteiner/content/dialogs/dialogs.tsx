import React from "react";
import d from "./dialogs.module.css"
import {MessangesValue} from "./messanges-value/messanges-value";
import {DialogsComponent} from "./dialodsName/dialogs-components";
import {ActionType} from "../../../state/store";
import {DialogsNameType} from "../../../index";
type propsType = {
    messages: Array<messagesType>
    dialogsName : Array<DialogsNameType>
    dispatch: (action: ActionType)=>void
}
type messagesType = {
    value: string
    id: string
}
export const Dialods = function (props: propsType) {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItem}>
                <DialogsComponent dialodsName={props.dialogsName}/>
            </div>
            <div>
                <MessangesValue messangesValue={props.messages} dispatch={props.dispatch}/>
            </div>
        </div>
    )
}

