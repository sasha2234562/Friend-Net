import p from "../posts.module.css";
import React, {ChangeEvent} from "react";

type CreatePostType = {
    newPostText: string
    onChange: (e: string) => void
    addPost: (newPostText: string) => void
}
export const CreatePost = (props: CreatePostType)=> {

    function onChangeHandler(event: ChangeEvent<HTMLTextAreaElement>) {
        event.currentTarget.value && props.onChange(event.currentTarget.value);
    }

    function onClickHandler() {
        props.newPostText && props.addPost(props.newPostText);
    }

    return(
        <div className={p.textarea_input}>
                <textarea
                    value={props.newPostText}
                    onChange={onChangeHandler}
                    placeholder={"Enter new text"}
                ></textarea>
            <input onClick={onClickHandler} type={"button"} value={"Publication"}/>
        </div>
    )
}