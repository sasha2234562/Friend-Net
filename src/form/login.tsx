import {FormDataType, LoginReduxForm} from "../conteiner/header/login/login-form";
import {connect, useDispatch, useSelector} from "react-redux";
import {loginThunkCreator} from "../redux/auth-reduser";
import {AppStoreType} from "../redux/redux-store";
import {Redirect} from "react-router-dom";

export const Login = () => {
    const isAuth = useSelector<AppStoreType>(state => state.authReducer.isAuth)
    const dispatch = useDispatch()
    const onSubmit = (formData: FormDataType) => {
        dispatch(loginThunkCreator(formData.email, formData.password, formData.rememberMe))
    }
    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div><LoginReduxForm onSubmit={onSubmit}/></div>
    )
}

export default connect(null, {loginThunkCreator})(Login)