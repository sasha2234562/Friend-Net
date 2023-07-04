import d from "../dialogs.module.css";
import React, {useState} from "react";
import {ButtonUniversal} from "../../../../universal-component/universal-component";

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

    }
    let [es, setEs] = useState('')

    const onClickHandler = () => {
        console.log(es)
        setEs('')
    }
    const onChangeEventHandler = (e : string) => {
        setEs(e)
    }

    return (
        <div>
            {props.messangesValue.map((item) => {
                return (
                    <div key={item.id}>
                        <div key={item.id} className={d.messange} id={item.id}>{item.value}</div>
                    </div>
                )
            })}
            {/*<div>*/}
            {/*    <textarea value={newPostElem.current?.value} ref={newPostElem} placeholder={'write text'}></textarea>*/}
            {/*    <button onClick={addPost}>Click</button>*/}
            {/*</div>*/}
            <ButtonUniversal value={es} title={'Click me'} onClick={onClickHandler} onChange={onChangeEventHandler}/>
        </div>
    )
}
function hi() {
    console.log('go to bed')
    // hi()
}
hi()