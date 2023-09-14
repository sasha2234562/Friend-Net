import {FormDataType, LoginReduxForm} from "./login";

export const Login = ()=> {
    const onSubmit = (formData: FormDataType)=> {
        console.log(formData)
    }

    return(
        <div><LoginReduxForm onSubmit={onSubmit}/></div>
    )
}

