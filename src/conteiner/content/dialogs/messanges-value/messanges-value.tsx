import d from "../dialogs.module.css";
import React from "react";

type messangesType = {
    messangesValue: Array<messangesValueType>
}
type messangesValueType = {
    value: string
    id: string
}
export const MessangesValue = (props: messangesType) => {

    let newPostElem = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        let text = newPostElem.current!.value;
        console.log(text)
    }

    return (
        <div>
            {props.messangesValue.map((item) => {
                return (
                    <div>
                        <div key={item.id} className={d.messange} id={item.id}>{item.value}</div>
                    </div>
                )
            })}
            <div>
                <textarea ref={newPostElem} placeholder={'write text'}></textarea>
                <button onClick={addPost}>Click</button>
            </div>
        </div>
    )
}
