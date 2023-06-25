// import './index.css';
// import {render} from "./render";
//
// render()


import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, changeNewpostText, subscribe} from "./state/state";
import state from "./state/state";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                changeNewpostText={changeNewpostText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    )
}
rerenderEntireTree()

subscribe(rerenderEntireTree)