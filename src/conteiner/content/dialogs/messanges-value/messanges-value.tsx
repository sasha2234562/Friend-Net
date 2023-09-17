import d from "../dialogs.module.css";
import React from "react";
import {CreateMessagePropsType, MessagesReduxForm} from "../../../../form/MessagesForm";


type MapPropsType = MapStateToPropsType & MapDispatchToProps

type MapStateToPropsType = {
    messages: Array<{ value: string, id: string }>
}
type MapDispatchToProps = {
    AddMessageAC: (newPostText: string) => void
}
export const MessagesValue = (props: MapPropsType) => {
    const onSubmit = (formData: CreateMessagePropsType) => {
        props.AddMessageAC(formData.message)
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
                <MessagesReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

