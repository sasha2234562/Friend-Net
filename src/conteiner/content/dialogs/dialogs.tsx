import React from "react";
import d from "./dialogs.module.css"
import {ConteinerMessangesValue} from "./messanges-value/conteiner-messanges-value";
import StoreContext from "../../../store-context";
import {DialogsComponent} from "./dialodsName/dialogs-components";


export const Dialods = function () {
    return <StoreContext.Consumer>{
        (store) => <div className={d.dialogs}>
            <div className={d.Item}>
                <DialogsComponent
                    dialodsName={store.getState().dialogsPage.dialogsName}/>
            </div>
            <div>
                <ConteinerMessangesValue
                    state={store.getState()}
                    dispatch={store.dispatch}
                />
            </div>
        </div>
    }
    </StoreContext.Consumer>
}

