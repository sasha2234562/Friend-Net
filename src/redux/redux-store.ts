import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reduser";
import {messageReducer} from "./message-reduser";



let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage: messageReducer
})
export let store = createStore(reducers)