import Conteiner from "./conteiner/conteiner";
function App(props : { posts: { img: string; comment: string; }[]; }) {

    return (
        <div className="App">
            <Conteiner posts={props.posts}/>
        </div>
    );
}

export default App;
