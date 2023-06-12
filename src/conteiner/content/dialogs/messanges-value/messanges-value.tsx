import d from "../dialogs.module.css";
import React from "react";

type messangesType= {
   messangesValue : Array<messangesValueType>
}
type messangesValueType = {
    value : string
    id : string
}
export const MessangesValue= (props : messangesType)=> {
    return(
        <div>
            {props.messangesValue.map((item)=> {
                return(
                        <div className={d.messange} id={item.id}>{item.value}</div>

                    )
            })}
        </div>
        // <div className={d.messangesItem}>
        //     <div className={d.messange}>Hello</div>
        //     <div className={d.messange}>Bye</div>
        //     <div className={d.messange}>How are you?</div>
        //     <div className={d.messange}>Good</div>
        //     <div className={d.messange}>Go to bed</div>
        // </div>
    )
}
