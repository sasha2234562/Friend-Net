import {ProfileActionType, profileReducer} from "./profile-reducer";
import {MessageActionType, messageReducer} from "./message-reduser";
import {UsersActionType, usersReduser} from "./user-reduser";
import {AuthLoginType, authReducer} from "./auth-reduser";
import thunk, {ThunkAction} from "redux-thunk";
import {FormAction, reducer as formReducer} from 'redux-form';
import {AppActionsType, appReduser} from "./app-reduser";
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: messageReducer,
    users: usersReduser,
    authReducer: authReducer,
    form: formReducer,
    app: appReduser
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 export const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)));



export type AppThunk<ReturnType = void> = ThunkAction<void, AppStoreType, unknown, any>
export type AppStoreType = ReturnType<typeof reducers>
export type ActionsAllType = AuthLoginType
    | MessageActionType
    | ProfileActionType
    | UsersActionType
    | FormAction
    | AppActionsType
