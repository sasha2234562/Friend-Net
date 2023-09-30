import {authThunkCreator} from "./auth-reduser";
import {ThunkAction} from "redux-thunk";
import {ActionsAllType, AppStoreType} from "./redux-store";

export const INITIALISED_APP = 'INITIALISED_APP'

type initialStateType = {
    initialized: boolean
}

const initialState = {
    initialized: false
}

export const appReduser = (state: initialStateType = initialState, action: AppActionsType) => {
    switch (action.type) {
        case "INITIALISED_APP" : {
            return {
                ...state,
                initialized: true
            }
        }

    }
    return state
}
export const initializedAC = () => ({type: INITIALISED_APP} as const)

export const initializeApp = (): ThunkAction<void, AppStoreType, unknown, ActionsAllType> => async (dispatch) => {
    const promise = dispatch(authThunkCreator())
    promise.then(() => {
        dispatch(initializedAC())
    })
}

export type AppActionsType = ReturnType<typeof initializedAC>