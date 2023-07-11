import React, {useState} from "react";
import {MessangesValue} from "./messanges-value";
import {storeType} from "../../../../index";


export const ConteinerMessangesValue = (props: storeType) => {

    let dialogs = props.state


    let [newMessage, setNewMessage] = useState('')

    const onChange= (event: string) => {
        setNewMessage(event);
    }

    const onClick = () => {
        props.dispatch({
            type: 'ADD-MESSAGE',
            newMessage: newMessage
        })
        setNewMessage('')
    }


    return <MessangesValue
        onClick={onClick}
        messages={dialogs.dialogsPage.messages}
        onChange={onChange}
        newMessage={dialogs.dialogsPage.newMessage}
        value={newMessage}
    />

}
