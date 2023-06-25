import Header from "./header/header-bacground";
import Content from "./content/content";
import {stateType} from "../App";
import {addPost, changeNewpostText} from "../state/state";


function Conteiner(props : stateType) {

    return (
        <div>
            <Header/>
            <Content changeNewpostText={changeNewpostText} state={props.state} addPost={addPost}/>
        </div>
    )
}

export default Conteiner;