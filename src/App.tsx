import Conteiner from "./conteiner/conteiner";
import c from "./conteiner/conteiner.module.css"
import {ActionType} from "./state/store";


export type stateType = {
    state: {
        dialogsPage: DialogsPageType,
        profilePage: ProfilePage
    }
    dispatch: (action: ActionType) => void
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
        <div className={c.conteiner}>
            <Conteiner
                // changeNewpostText={store.changeNewpostText}
                state={props.state}
                dispatch={props.dispatch}/>
        </div>
    );
}

export default App;
