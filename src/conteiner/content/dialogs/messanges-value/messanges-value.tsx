import d from "../dialogs.module.css";
import React from "react";
import {
    ButtonUniversal
} from "../../../../universal-component-button-input(text)/universal-component-button-input(text)";
import {Redirect} from "react-router-dom";

type MapPropsType = MapStateToPropsType & MapDispatchToProps

type MapStateToPropsType = {
    messages: Array<{ value: string, id: string }>
    newMessage: string
    isAuth: boolean
}
type MapDispatchToProps= {
    onChange: (e: string) => void
    addPost: (newPostText: string) => void
}
export const MessagesValue = (props: MapPropsType) => {


    const onChangeHandler = (event: string) => {
        props.onChange(event);
    }

    const onClickHandler = () => {
        props.addPost(props.newMessage)
    }


    if(props.isAuth === false) return <Redirect to={'/login'}/>
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
