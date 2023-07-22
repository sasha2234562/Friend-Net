import React, {useState} from "react";
import {Posts} from "./posts";
import {ActionType} from "../../../../redux/store";

export type propsType = {
    posts: Array<post>
    dispatch: (action: ActionType) => void
    newPostText: string
}


type post = {
    img: string
    comment: string
}

export const ConteinerPosts = (props: propsType) => {

    let state = props.posts
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
