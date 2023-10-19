import {Dispatch} from "redux";
import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {ActionsAllType, AppStoreType} from "./redux-store";

const initialState: initialStateType = {
    id: '',
    login: '',
    email: '',
    isAuth: false,
    captchaUrl: null
}

export const authReducer = (state: initialStateType = initialState, action: AuthLoginActionsType) => {
    switch (action.type) {
        case AUTH_LOGIN : {
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth
            }
        }
        case GET_CAPTCHA_URL_SUCCESS: {
            return {...state, captchaUrl: action.captcha}
        }


    }
    return state
}

export const getCaptchaUrlTC = () => async (dispatch: Dispatch) => {
    const response = await securityAPI.captcha()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccesAC(captchaUrl))
}

export const getAuthDataAC = (id: string, login: string, email: string, isAuth: boolean) => ({
    type: AUTH_LOGIN,
    data: {id, login, email}, isAuth
} as const);

export const getCaptchaUrlSuccesAC = (captcha: string) => ({type: GET_CAPTCHA_URL_SUCCESS, captcha} as const)

export const authThunkCreator = () => {
    return (dispatch: Dispatch) => {
        return authAPI.me().then(res => {
            if (res.data.resultCode === 0) {
                let {id, login, email} = res.data.data
                dispatch(getAuthDataAC(id, login, email, true))

            }
        })
    }
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean, captcha?: string): ThunkAction<void, AppStoreType, unknown, ActionsAllType> => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe, captcha).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(authThunkCreator())
            }
            if (res.data.resultCode === 1) {
                dispatch(stopSubmit('login', {_error: res.data.messages[0]}))
            }
            if (res.data.resultCode === 10) {
                console.log(res)
                dispatch(getCaptchaUrlTC())
            }
        })
    };
}
export const logAutThunkCreator = () => {
    return (dispatch: Dispatch) => {
        authAPI.logAut().then(res => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthDataAC('', '', '', false))
            }
        })
    };
}

//types
const AUTH_LOGIN = 'AUTH_LOGIN'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'

export type initialStateType = {
    id: string
    login: string
    email: string
    isAuth: boolean
    captchaUrl: null | string
}
export type AuthLoginActionsType = ReturnType<typeof getAuthDataAC> | ReturnType<typeof getCaptchaUrlSuccesAC>
