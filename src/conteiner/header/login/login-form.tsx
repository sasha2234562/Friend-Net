import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    error: string
}
export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div><Field component={'input'} type={'text'} name={'email'}/></div>
                <div><Field component={'input'} type={'password'} name={'password'}/></div>
                <div><Field component={'input'} type={'checkbox'} name={'rememberMe'}/></div>
                {props.error && <div style={{color: 'red', border: '3px solid yellow'}}>{props.error}</div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)