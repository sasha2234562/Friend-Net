import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {AppActionsType, AppStoreType} from "./redux-store";

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

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean): ThunkAction<void, AppStoreType, unknown, AppActionsType> => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(authThunkCreator())
            }
            if (res.data.resultCode === 1) {
                dispatch(stopSubmit('login', {_error: res.data.messages[0]}))
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
export type AuthLoginType = ReturnType<typeof getAuthData>
