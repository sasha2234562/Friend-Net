export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    error: string
    captcha?: string
}

type MapStateToPropsType = {
    auth: {
        id: string
        login: string
        email: string
    }
}
type MapDispatchToProps = {
    authThunkCreator: () => void
    logAutThunkCreator: ()=> void
}
export type PropsType = MapStateToPropsType & MapDispatchToProps