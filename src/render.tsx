import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App, {stateType} from "./App";
import {addPost} from "./state/state";
import state from "./state/state";


export const render = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
        </BrowserRouter>,
        document.getElementById('root')
    )
}