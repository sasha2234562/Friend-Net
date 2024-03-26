import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../redux/redux-store";
import l from './login-form.module.css'
import {FormDataType} from "./login-form.type";

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({ error, handleSubmit}) => {

    const captcha = useSelector<AppStoreType, string | null>(state => state.authReducer.captchaUrl);

    return (
        <div className={l.Container}>
            <form onSubmit={handleSubmit} className={l.Form}>
                <p>Вход используйте общие учетные данные<br/> тестовой учетной записи:<br/>
                    Электронная почта: <span className={l.Error}>free@samuraijs.com</span><br/>
                    Пароль: <span className={l.Error}>free</span></p>
                <Field className={l.Input} component={'input'} type={'text'} name={'email'}/>
                <Field className={l.Input} component={'input'} type={'password'} name={'password'}/>
                <div className={l.CheckboxWrapper}>
                    <Field className={l.Input} component={'input'} type={'checkbox'}
                            name={'rememberMe'}/> Запомнить меня?
                </div>
                {captcha && <div className={l.CaptchaContainer}>
                    <img src={captcha} alt={'captcha'}/>
                    <Field placeholder={'Enter text from the image'}
                           component={'input'}
                           type={'text'}
                           name={'captcha'}/></div>
                }
                {error && <div className={l.Error}>{error}</div>}
                <button className={l.ButtonLogin}>Login</button>
            </form>
        </div>
    )
}

export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)