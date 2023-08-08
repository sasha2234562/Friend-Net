import d from "../dialogs.module.css";
import React from "react";
import {
    ButtonUniversal
} from "../../../../universal-component-button-input(text)/universal-component-button-input(text)";

type messageValueType = {
    onChange: (e: string) => void
    onClick: () => void
    messages: Array<MessagesType>
    newMessage: string
    value: string
}
type MessagesType = {
    value: string
    id: string
}
export const MessangesValue = (props: messageValueType) => {


    const onChangeHandler = (event: string) => {
        props.onChange(event);
    }

    const onClickHandler = () => {
        props.onClick()
    }


    return (
        <div>
            {props.messages.map((item) => {
                return (
                    <div key={item.id}>
                        <div key={item.id} className={d.messange} id={item.id}>{item.value}</div>
                    </div>
                )
            })}
            <div>
                <ButtonUniversal
                    placeholderValue={props.newMessage}
                    title={'Send messange'} onClick={onClickHandler}
                    onChange={onChangeHandler}
                    value={props.value}
                />
            </div>
        </div>
    )
}
