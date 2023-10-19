import {FormDataType, LoginReduxForm} from "../conteiner/header/login/login-form";
import {Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../redux/redux-store";
import {loginThunkCreator} from "../redux/auth-reduser";

export const Login = () => {
    const isAuth = useSelector<AppStoreType, boolean>(state => state.authReducer.isAuth)
    const dispatch = useDispatch()

    const onSubmit = (formData: FormDataType) => {
        dispatch(loginThunkCreator(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }
    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div><LoginReduxForm onSubmit={onSubmit}/></div>
    )
}