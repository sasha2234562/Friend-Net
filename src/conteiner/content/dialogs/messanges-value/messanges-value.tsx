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
    )
}
