import {ProfileActionType, profileReducer} from "./profile-reducer";
import {MessageActionType, messageReducer} from "./message-reduser";
import {UsersActionType, usersReduser} from "./user-reduser";
import {AuthLoginType, authReducer} from "./auth-reduser";
import {ThunkAction} from "redux-thunk";
import {FormAction, reducer as formReducer} from 'redux-form';
import {AppActionsType, appReduser} from "./app-reduser";
import {combineReducers, compose, createStore} from 'redux';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: messageReducer,
    users: usersReduser,
    authReducer: authReducer,
    form: formReducer,
    app: appReduser
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// непосредственно создаём store
export const store = createStore(reducers, composeEnhancers());



export type AppThunk<ReturnType = void> = ThunkAction<void, AppStoreType, unknown, any>
export type AppStoreType = ReturnType<typeof reducers>
export type ActionsAllType = AuthLoginType
    | MessageActionType
    | ProfileActionType
    | UsersActionType
    | FormAction
    | AppActionsType
