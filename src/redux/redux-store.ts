import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileActionType, profileReducer} from "./profile-reducer";
import {MessageActionType, messageReducer} from "./message-reduser";
import {UsersActionType, usersReduser} from "./user-reduser";
import {AuthLoginType, authReducer} from "./auth-reduser";
import thunk from "redux-thunk";
import {FormAction, reducer as formReducer} from 'redux-form';
import {AppActionsType, appReduser} from "./app-reduser";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: messageReducer,
    users: usersReduser,
    authReducer: authReducer,
    form: formReducer,
    app: appReduser
})

export type AppStoreType = ReturnType<typeof reducers>

export type ActionsAllType = AuthLoginType
    | MessageActionType
    | ProfileActionType
    | UsersActionType
    | FormAction
    | AppActionsType
export let store = createStore(reducers, applyMiddleware(thunk))