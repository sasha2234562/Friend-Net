import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../redux/redux-store";

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    error: string
    captcha?: string
}
export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    const captcha = useSelector<AppStoreType, string | null>(state => state.authReducer.captchaUrl)
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div><Field component={'input'} type={'text'} name={'email'}/></div>
                <div><Field component={'input'} type={'password'} name={'password'}/></div>
                <div style={{color: 'white'}}><Field component={'input'} type={'checkbox'} name={'rememberMe'}/> Remember me?</div>
                {captcha && <div style={{display: "flex", flexDirection: 'column'}}>
                    <img src={captcha}/>
                    <Field placeholder={'Enter text from the image'}
                           component={'input'}
                           type={'text'}
                           name={'captcha'}/></div>
                }
                {props.error && <div style={{color: 'red', border: '3px solid yellow'}}>{props.error}</div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)