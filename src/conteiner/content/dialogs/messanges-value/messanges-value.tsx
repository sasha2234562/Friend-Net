import d from "../dialogs.module.css";
import React, {useState} from "react";
import {
    ButtonUniversal
} from "../../../../universal-component-button-input(text)/universal-component-button-input(text)";
import {ActionType} from "../../../../state/store";

type messangesType = {
    messangesValue: Array<messangesValueType>
    dispatch: (action: ActionType)=>void
}
type messangesValueType = {
    value: string
    id: string
}
export const MessangesValue = (props: messangesType) => {

    let [newMessage, setNewMessage] = useState('')

    const onChangeHandler = (event: string) => {
        setNewMessage(event);
    }

    const onClickHandler = () => {
        props.dispatch({type: 'ADD-MESSAGE', newMessage: newMessage})
        console.log(newMessage)
        setNewMessage('')
    }


    return (
        <div>
            {props.messangesValue.map((item) => {
                return (
                    <div key={item.id}>
                        <div key={item.id} className={d.messange} id={item.id}>{item.value}</div>
                    </div>
                )
            })}
            <div>
            <ButtonUniversal title={'Send messange'} onClick={onClickHandler} onChange={onChangeHandler} value={newMessage}/>
            </div>
        </div>
    )
}
