import p from "./posts.module.css"
import React, {ChangeEvent} from "react";
import axios from "axios";
import {log} from "util";

type MapPropsType = MapStateToPropsType & MapDispatchToProps
type MapStateToPropsType = {
    posts: Array<{
        img: string
        comment: string
    }>
    newPostText: string
}
type MapDispatchToProps = {
    onChange: (e: string) => void
    addPost: (newPostText: string) => void
}

export const Posts = (props: MapPropsType) => {

    function onChangeHandler(event: ChangeEvent<HTMLTextAreaElement>) {
        event.currentTarget.value && props.onChange(event.currentTarget.value);
    }

    function onClickHandler() {
        props.newPostText && props.addPost(props.newPostText);
    }

    return (
        <div className={p.posts}>
            <div className={p.textarea_input}>
                <textarea
                    value={props.newPostText}
                    onChange={onChangeHandler}
                    placeholder={"Enter new text"}
                ></textarea>
                <input onClick={onClickHandler} type={"button"} value={"Publication"}/>
            </div>
            <div className={p.content_posts}>
                {props.posts.map((item, index) => {
                    return (
                        <div key={index}>
                            <img src={`${item.img}`}/>
                            <span>{item.comment}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
