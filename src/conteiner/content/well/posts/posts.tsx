import p from "./posts.module.css"
import React, {ChangeEvent, useState} from "react";
import {ActionType} from "../../../../redux/store";

export type propsType = {
    posts: Array<post>
    addPost: ()=> void
    // newPostText: string
}


type post = {
    img: string
    comment: string
}

export const Posts = (props: propsType) => {

    // let [text, setText] = useState(props.newPostText)

    function onChangeHandler(event: ChangeEvent<HTMLTextAreaElement>) {
        props.addPost(event.currentTarget.value);
        // event.currentTarget.value && props.dispatch({
        //     type: 'CHANGE-NEW-POST-TEXT',
        //     newText: event.currentTarget.value
        // })
    }

    function onClickHandler() {
        props.addPost();
        // text && props.dispatch({type: 'ADD-POST', text: text})
        // setText('')
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
