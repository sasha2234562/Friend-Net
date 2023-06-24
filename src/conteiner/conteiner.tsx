import Header from "./header/header-bacground";
import Content from "./content/content";
import {stateType} from "../App";
import {addPost} from "../state/state";


function Conteiner(props : stateType) {

    return (
        <div>
            <Header/>
            <Content state={props.state} addPost={addPost}/>
        </div>
    )
}

export default Conteiner;