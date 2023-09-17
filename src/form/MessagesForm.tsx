import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../components/forms-controls/vaalidators";
import {Textarea} from "../components/forms-controls/forms-controls";

export type CreateMessagePropsType = {
    message: string
}
const  max = maxLengthCreator(15)
export const MessagesForm: React.FC<InjectedFormProps<CreateMessagePropsType>> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div><Field component={Textarea} name={'message'} validate={[required, max]}/></div>
                <div><button>Add message</button></div>
            </form>
        </div>
    )

}

export const MessagesReduxForm = reduxForm<CreateMessagePropsType>({form: 'message'})(MessagesForm)