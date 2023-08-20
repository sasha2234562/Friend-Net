import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {messageReducer} from "./message-reduser";
import {usersReduser} from "./user-reduser";
import {authReducer} from "./auth-reduser";


let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage: messageReducer,
    users: usersReduser,
    authReducer: authReducer
})

export type AppStateType = ReturnType<typeof reducers>
export let store = createStore(reducers)

// export type AppDispatch = typeof store.dispatch