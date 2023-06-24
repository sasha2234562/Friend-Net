import p from "./posts.module.css"
import React, {ChangeEvent, useState} from "react";

type propsType = {
    post: Array<post>,
    addPost: (text: string) => void
}


type post = {
    img: string
    comment: string
}


export const Posts = (props: propsType) => {
    let [text, setText] = useState('')

    function onChangeHandler(event: ChangeEvent<HTMLTextAreaElement>) {
        console.log(event.currentTarget.value)
        setText(event.currentTarget.value);
    }

    function onClickHandler() {
        props.addPost(text)
        setText('')
    }

    return (
        <div className={p.posts}>
            <div className={p.textarea_input}>
                <textarea value={text} onChange={onChangeHandler} placeholder={"Hello, people"}></textarea>
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