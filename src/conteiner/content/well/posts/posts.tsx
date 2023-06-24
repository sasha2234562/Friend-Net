import p from "./posts.module.css"
import React, {ChangeEvent, useState} from "react";
import {text} from "stream/consumers";

type propsType = {
    post: Array<post>,
    addPost: (text : string )=>void
}


type post = {
    img: string
    comment: string
}


export const Posts = (props: propsType) => {

    let newPostElem = React.createRef<HTMLTextAreaElement>();
    // let [valueTextarea, setValueTextarea] = useState('')
    function onChangeHandler() {
       let text = newPostElem.current?.value
        text && props.addPost(text)
    }


    function onClickHandler() {
        onChangeHandler()
    }

    return (
        <div className={p.posts}>
            <div className={p.textarea_input}>
                <textarea onChange={onChangeHandler} ref={newPostElem} placeholder={"Hello, people"}></textarea>
                <input onClick={onClickHandler} type={"button"} value={"Publication"}/>
            </div>
            <div className={p.content_posts}>
                {props.post.map((item, index) => {
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