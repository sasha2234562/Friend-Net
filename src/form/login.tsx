import {FormDataType, LoginReduxForm} from "../conteiner/header/login/login-form";
import {connect, useDispatch} from "react-redux";
import {loginThunkCreator} from "../redux/auth-reduser";
import {Dispatch} from "redux";


type MapDispatchToPropsType = {
    loginThunkCreator: (email: string, password: string, rememberMe: boolean)=> void
}
export const Login = (props: any)=> {
   const dispatch = useDispatch()
    const onSubmit = (formData: FormDataType)=> {
        dispatch(loginThunkCreator(formData.email, formData.password, formData.rememberMe))
    }

    return(
        <div><LoginReduxForm onSubmit={onSubmit}/></div>
    )
}
export default connect(null, {loginThunkCreator})(Login)