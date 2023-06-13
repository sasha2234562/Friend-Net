import Header from "./header/header-bacground";
import Content from "./content/content";

function Conteiner(props : { posts: { img: string; comment: string; }[]; }) {

    return (
        <div>
            <Header/>
            <Content posts={props.posts}/>
        </div>
    )
}

export default Conteiner;