import React, {ChangeEvent, useState} from "react";
import {propsType} from "../well";
import {Posts} from "./posts";


export const ConteinerPosts = (props: propsType) => {

    let state = props.posts
    debugger
    let [text, setText] = useState(props.newPostText)

    function onChangeHandler(event: ChangeEvent<HTMLTextAreaElement>) {
        event.currentTarget.value && props.dispatch({
            type: 'CHANGE-NEW-POST-TEXT',
            newText: event.currentTarget.value
        })
    }
    function onClickHandler() {
        // text && props.dispatch({type: 'ADD-POST', text: text})
        // setText('')
    }
    function addPost() {
        text && props.dispatch({type: 'ADD-POST', text: text})
        setText('')
    }

    return <Posts posts={state} addPost={addPost}/>
}
