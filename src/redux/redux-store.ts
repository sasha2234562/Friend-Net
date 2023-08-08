import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {messageReducer} from "./message-reduser";



let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage: messageReducer
})

export type AppStateType = ReturnType<typeof reducers>
export let store = createStore(reducers)

export type AppDispatch = typeof store.dispatch