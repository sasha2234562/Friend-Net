import Conteiner from "./conteiner/conteiner";
// import {changeNewpostText} from "./state/state";
import store, {actionType} from "./state/store";


export type stateType = {
    state: {
        dialogsPage: DialogsPageType,
        profilePage: ProfilePage
    }
    dispatch: (action: actionType) => void
    // changeNewpostText: (newText: string ) => void
}
type DialogsPageType = {
    dialogsName: Array<DialogsNameType>
    messages: Array<MessagesType>
}
export type  DialogsNameType = {
    src: string
    name: string
    id: string
}
type MessagesType = {
    value: string
    id: string
}

type ProfilePage = {
    posts: Array<PostsType>
    newPostText: string
}
type PostsType = {
    comment: string
    img: string
}


function App(props: stateType) {

    return (
        <div className="App">
            <Conteiner
                // changeNewpostText={store.changeNewpostText}
                state={props.state}
                dispatch={props.dispatch}/>
        </div>
    );
}

export default App;
