import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {messageReducer} from "./message-reduser";
import {usersReduser} from "./user-reduser";
import {authReducer} from "./auth-reduser";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: messageReducer,
    users: usersReduser,
    authReducer: authReducer,
    form: formReducer
})

export type AppStoreType = ReturnType<typeof reducers>
export let store = createStore(reducers, applyMiddleware(thunk))