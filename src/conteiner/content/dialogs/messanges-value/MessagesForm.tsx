import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type CreateMessagePropsType = {
    message: string
}

export const MessagesForm: React.FC<InjectedFormProps<CreateMessagePropsType>> = (props) => {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div><Field component={'textarea'} name={'message'}/></div>
                <div><button>Add message</button></div>
            </form>
        </div>
    )

}

export const MessagesReduxForm = reduxForm<CreateMessagePropsType>({form: 'message'})(MessagesForm)