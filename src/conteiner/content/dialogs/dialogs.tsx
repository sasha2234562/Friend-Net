import React, {useState} from "react";
import d from "./dialogs.module.css"
import {DilogsComponent} from "./dialogs-components";



export const Dialods = function () {

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItem}>
              <DilogsComponent/>
            </div>
            <div className={d.messangesItem}>
                <div className={d.messange}>Hello</div>
                <div className={d.messange}>Bye</div>
                <div className={d.messange}>How are you?</div>
                <div className={d.messange}>Good</div>
                <div className={d.messange}>Go to bed</div>
            </div>
        </div>
    )
}

