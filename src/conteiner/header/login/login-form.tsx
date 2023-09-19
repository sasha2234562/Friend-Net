import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {useDispatch} from "react-redux";
import {loginAutThunkCreator} from "../../../redux/auth-reduser";

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
export const Loginform: React.FC<InjectedFormProps<FormDataType>> = (props) => {

const dispath = useDispatch()
    const logAut = ()=> {
    dispath(loginAutThunkCreator())
    }
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div><Field component={'input'} type={'text'} name={'email'}/></div>
                <div><Field component={'input'} type={'password'} name={'password'}/></div>
                <div><Field component={'input'} type={'checkbox'} name={'rememberMe'}/></div>
                <div>
                    <button>Login</button>
                </div>
            </form>
            <div><button onClick={logAut}>LogAut</button></div>
        </div>
    )
}

export const LoginReduxForm = reduxForm<FormDataType>({form: 'email'})(Loginform)