import React, {ChangeEvent, useState} from "react";
import {propsType} from "../well";
import {Posts} from "./posts";


export const ConteinerPosts = (props: propsType) => {

    let state = props.posts
    debugger
    let [text, setText] = useState(props.newPostText)

    function onChange(e: string) {
        e && props.dispatch({
            type: 'CHANGE-NEW-POST-TEXT',
            newText: e
        })
        setText(e)
    }
    function addPost() {
        text && props.dispatch({type: 'ADD-POST', text: text})
        setText('')
    }

    return <Posts posts={state} onChange={onChange} addPost={addPost} text={text}/>
}
