
const AUTH_LOGIN = 'AUTH_LOGIN'

type initialStateType = {
    id: string | null
    login: string | null
    email: string | null
}

const initialState: initialStateType = {
    id: null,
    login: null,
    email: null
}

export const authReducer = (state: initialStateType = initialState, action: AuthLoginType) => {
switch (action.type){
    case AUTH_LOGIN : {
        return {
            ...state,
            ...action.data
        }
    }
}

}



export const AuthLogin = (id: string, login : string, email: string )=> ({type: AUTH_LOGIN,
data: {
    id, login, email
}});
type AuthLoginType = ReturnType<typeof AuthLogin>
// type AddMessageACType = ReturnType<typeof AddMessageAC>
// type ChangeMessageACType = ReturnType<typeof changeMessageAC>
//
//
// export const AddMessageAC = (text: string) => ({type: ADDMESSAGE, text} as const)
// export const changeMessageAC = (newText: string) => ({type: CHANGENEWMESSAGE, newText} as const)
//