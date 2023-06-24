import Conteiner from "./conteiner/conteiner";


export type stateType = {
    state: {
        dialogsPage: DialogsPageType,
        profilePage: ProfilePage
    },
    addPost: (text : string )=>void
}
type DialogsPageType = {
    dialogsName: Array<DialogsNameType>
    messages: Array<MessagesType>
}
export type  DialogsNameType = {
    src : string
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
            <Conteiner state={props.state} addPost={props.addPost}/>
        </div>
    );
}

export default App;
