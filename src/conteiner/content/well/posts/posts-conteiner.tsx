import React from "react";
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

    function onChange(e: string) {
        e && props.dispatch({
            type: 'CHANGE-NEW-POST-TEXT',
            newText: e
        })
    }

    function addPost() {
        props.newPostText && props.dispatch({type: 'ADD-POST', text: props.newPostText})
    }

    return <Posts posts={state} onChange={onChange} addPost={addPost} text={props.newPostText}/>
}


let mapStateToProps = () => {

}
let mapDispatchToProps = () => {

}