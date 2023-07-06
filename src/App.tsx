import Conteiner from "./conteiner/conteiner";
import c from "./conteiner/conteiner.module.css"
import {storeType} from "./index";



function App(props: storeType) {

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
