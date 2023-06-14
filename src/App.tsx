import Conteiner from "./conteiner/conteiner";


export type stateType = {
    state: {
        dialogsPage: DialogsPageType,
        profilePage: ProfilePage
    }
}
type DialogsPageType = {
    dialogsName: Array<DialogsNameType>
    messages: Array<MessagesType>
}
type  DialogsNameType = {
    name: string
    id: string
}
type MessagesType = {
    value: string
    id: string
}

type ProfilePage = {
    posts: Array<PostsType>
}
type PostsType = {
    comment: string
    img: string
}


function App(props: stateType) {

    return (
        <div className="App">
            <Conteiner state={props.state}/>
        </div>
    );
}

export default App;
