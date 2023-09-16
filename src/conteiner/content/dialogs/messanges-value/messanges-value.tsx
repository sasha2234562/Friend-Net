import d from "../dialogs.module.css";
import React from "react";
import {
    ButtonUniversal
} from "../../../../universal-component-button-input(text)/universal-component-button-input(text)";
import {Redirect} from "react-router-dom";
import {AddMessageAC, changeMessageAC} from "../../../../redux/message-reduser";

type MapPropsType = MapStateToPropsType & MapDispatchToProps

type MapStateToPropsType = {
    messages: Array<{ value: string, id: string }>
    newMessage: string
    isAuth: boolean
}
type MapDispatchToProps= {
    changeMessageAC: (e: string) => void
    AddMessageAC: (newPostText: string) => void
}
export const MessagesValue = (props: MapPropsType) => {


    const onChangeHandler = (event: string) => {
        props.changeMessageAC(event);
    }

    const onClickHandler = () => {
        props.AddMessageAC(props.newMessage)
    }


    // if(props.isAuth === false) return <Redirect to={'/login'}/>
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
                    title={'Send message'} onClick={onClickHandler}
                    onChange={onChangeHandler}
                    value={props.newMessage}
                />
            </div>
        </div>
    )
}
