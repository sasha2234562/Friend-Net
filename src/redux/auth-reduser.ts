import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const AUTH_LOGIN = 'AUTH_LOGIN'

export type initialStateType = {
    id: string
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
                ...action.data,
                isAuth: action.isAuth
            }
        }
    }
    return state
}


export const getAuthData = (id: string, login: string, email: string, isAuth: boolean) => ({
    type: AUTH_LOGIN,
    data: {
        id, login, email
    },
    isAuth
} as const);
export const authThunkCreator = () => {
    return (dispatch: Dispatch) => {
        authAPI.me().then(res => {
            if (res.data.resultCode === 0) {
                let {id, login, email} = res.data.data
                dispatch(getAuthData(id, login, email, true))

            }
        })
    }
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: Dispatch) => {
        authAPI.login(email, password, rememberMe).then(res => {
            if (res.data.resultCode === 0) {
                // @ts-ignore
                dispatch(authThunkCreator())
            }
            if (res.data.resultCode === 1) {
                let action = stopSubmit('login', {_error: res.data.messages[0]})
                dispatch(action)
            }
        })
    };
}
export const logAutThunkCreator = () => {
    return (dispatch: Dispatch) => {
        authAPI.logAut().then(res => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthData('', '', '', false))
            }
        })
    };
}
type AuthLoginType = ReturnType<typeof getAuthData>
