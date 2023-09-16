import p from "../posts.module.css";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type CreatePostType = {
    post: string
}
export const CreatePost: React.FC<InjectedFormProps<CreatePostType>> = (props) => {

    return (
        <div className={p.textarea_input}>
            <form onSubmit={props.handleSubmit}>
                <div><Field name={'post'} component={'textarea'} /></div>
                <div><button>Add post</button></div>
            </form>
        </div>
    )
}

export const CreateReduxPostForm = reduxForm<CreatePostType>({form: 'post'})(CreatePost)