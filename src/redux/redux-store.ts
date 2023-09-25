import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileActionType, profileReducer} from "./profile-reducer";
import {MessageActionType, messageReducer} from "./message-reduser";
import {UsersActionType, usersReduser} from "./user-reduser";
import {AuthLoginType, authReducer} from "./auth-reduser";
import thunk from "redux-thunk";
import {FormAction, reducer as formReducer} from 'redux-form';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: messageReducer,
    users: usersReduser,
    authReducer: authReducer,
    form: formReducer
})

export type AppStoreType = ReturnType<typeof reducers>

export type AppActionsType = AuthLoginType | MessageActionType | ProfileActionType | UsersActionType | FormAction
export let store = createStore(reducers, applyMiddleware(thunk))