import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {store} from "./redux/redux-store"
import React from "react";
import {Provider} from "react-redux";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    )
}
rerenderEntireTree()

store.subscribe(rerenderEntireTree)
// import {Provider} from "./store-context";

// export type storeType = {
//     state: {
//         dialogsPage: DialogsPageType,
//         profilePage: ProfilePage
//     }
//     dispatch: (action: { newText: string; type: string }) => void
// }
// type ActionType = ActionNewPostType | ActionNewText | ActionNewMessage
// type DialogsPageType = {
//     dialogsName: Array<DialogsNameType>
//     messages: Array<MessagesType>
//     newMessage: string
// }
// export type  DialogsNameType = {
//     src: string
//     name: string
//     id: string
// }
// type MessagesType = {
//     value: string
//     id: string
// }
//
// type ProfilePage = {
//     posts: Array<PostsType>
//     newPostText: string
// }
// type PostsType = {
//     comment: string
//     img: string
// }

