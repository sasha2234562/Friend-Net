import React from "react";
import d from "./dialogs.module.css"
import {DialogsComponent} from "./dialodsName/dialogs-components";
import {ConteinerMessangesValue} from "./messanges-value/conteiner-messanges-value";
import StoreContext from "../../../store-context";


export const Dialods = function () {
    return <StoreContext.Consumer>{
        (store) => <div className={d.dialogs}>
            <div className={d.dialogsItem}>
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

