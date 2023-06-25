import p from "./posts.module.css"
import React, {ChangeEvent, useState} from "react";
import {propsType} from "../well";

export const Posts = (props: propsType) => {


    let [text, setText] = useState(props.newPostText)
    function onChangeHandler(event: ChangeEvent<HTMLTextAreaElement>) {
        setText(event.currentTarget.value);

    }

    function onClickHandler() {
        text&& props.addPost(text)
        // setText('')
        // props.changeNewpostText(text)
        setText('')
    }

    return (
        <div className={p.posts}>
            <div className={p.textarea_input}>
                <textarea value={text} onChange={onChangeHandler} placeholder={"Hello, people"}></textarea>
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