import React from "react";
import d from "./dialogs.module.css"
import {ContainerMessagesValue} from "./messanges-value/container-messages-value";
import {UsersContainer} from "../../../users/users-conteiner";


function Dialogs () {
    return (
        <div className={d.dialogs}>
            <UsersContainer/>
            {/*<div className={d.Item}>*/}
                {/*<DialogsComponent*/}
                {/*    dialodsName={store.getState().dialogsPage.dialogsName}/>*/}
            {/*</div>*/}
            <div>
                <ContainerMessagesValue/>
            </div>
        </div>
    )
}

export default Dialogs;