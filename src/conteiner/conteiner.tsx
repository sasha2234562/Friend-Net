import Header from "./header/header-bacground";
import Content from "./content/content";
import {storeType} from "../index";


function Conteiner(props: storeType) {

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