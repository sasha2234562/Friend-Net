import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const AUTH_LOGIN = 'AUTH_LOGIN'

export type initialStateType = {
    id:string
    login: string
    email: string
    isAuth: boolean
}

const initialState: initialStateType = {
    id: '',
    login: '',
    email: '',
    isAuth: false
}

export const authReducer = (state: initialStateType = initialState, action: AuthLoginType) => {
    switch (action.type) {
        case AUTH_LOGIN : {
            return {
                ...state,
                ...action.data
            }
        }
    }
return state
}


export const getAuthData = (id: string, login: string, email: string) => ({
    type: AUTH_LOGIN,
    data: {
        id, login, email,
        isAuth: true
    }
} as const);
export const authThunkCreator = ()=> {
    return (dispatch: Dispatch) => {
        authAPI.me().then(res => {
            if(res.data.resultCode === 0) {
                let{id, login, email } = res.data.data
                dispatch(getAuthData(id, login, email))

            }
        })
    }
}

type AuthLoginType = ReturnType<typeof getAuthData>
