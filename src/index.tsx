import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/redux-store"
import React from "react";
import {Provider} from "react-redux";
import App from "./App";


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
