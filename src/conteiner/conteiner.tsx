import Header from "./header/header-bacground";
import Content from "./content/content";
import {stateType} from "../App";


function Conteiner(props: stateType) {

    return (
        <div>
            <Header/>
            <Content
                state={props.state}
                dispatch={props.dispatch}/>
        </div>
    )
}

export default Conteiner;