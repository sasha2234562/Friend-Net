import {FormDataType, LoginReduxForm} from "../conteiner/header/login/login-form";

export const Login = ()=> {
    const onSubmit = (formData: FormDataType)=> {

    }

    return(
        <div><LoginReduxForm onSubmit={onSubmit}/></div>
    )
}