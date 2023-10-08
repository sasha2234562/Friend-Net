import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";
import {store} from "./redux/redux-store"
import React from "react";
import {Provider} from "react-redux";
import App from "./App";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>,
        document.getElementById('root')
    )
}
rerenderEntireTree()

store.subscribe(rerenderEntireTree)
