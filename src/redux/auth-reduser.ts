const AUTH_LOGIN = 'AUTH_LOGIN'

export type initialStateType = {
    id:string | null
    login: string | null
    email: string | null
}

const initialState: initialStateType = {
    id: null,
    login: null,
    email: null
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
        id, login, email
    }
} as const);
type AuthLoginType = ReturnType<typeof getAuthData>
