import p from "../conteiner/content/well/posts/posts.module.css";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../components/forms-controls/vaalidators";
import {Textarea} from "../components/forms-controls/forms-controls";

export type CreatePostType = {
    post: string
}

const max = maxLengthCreator(10)
export const PostForm: React.FC<InjectedFormProps<CreatePostType>> = (props) => {

    return (
        <div className={p.textarea_input}>
            <form onSubmit={props.handleSubmit}>
                <div><Field
                    name={'post'}
                    component={Textarea}
                    validate={[required, max]}
                />
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </form>
        </div>
    )
}

export const CreateReduxPostForm = reduxForm<CreatePostType>({form: 'post'})(PostForm)