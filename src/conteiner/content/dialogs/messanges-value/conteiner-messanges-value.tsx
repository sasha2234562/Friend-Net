import React, {useState} from "react";
import {MessangesValue} from "./messanges-value";
import {storeType} from "../../../../index";
import {connect} from "react-redux";
import {Dialods} from "../dialogs";
import {AppStateType} from "../../../../redux/redux-store";


export const ConteinerMessangesValue = (props: storeType) => {

    let dialogs = props.state

    let [newMessage, setNewMessage] = useState('')

    const onChange = (event: string) => {
        setNewMessage(event);
    }

    const onClick = () => {
        props.dispatch({
            type: 'ADD-MESSAGE',
            newMessage: newMessage
        })
        setNewMessage('')
    }

    return <MessangesValue
        onClick={onClick}
        messages={dialogs.dialogsPage.messages}
        onChange={onChange}
        newMessage={dialogs.dialogsPage.newMessage}
        value={newMessage}
    />

}
// let mapStateToProps = (state: AppStateType) => {
//     return {
//         messages: state.dialogsPage.messages,
//         newMessage: state.dialogsPage.newMessage
//     }
// }
// const mapDispatchToProps = (dispatch: any) => {
//     return {
//         onChange: (event: string)=>{
//             setNewMessage(event);
//         },
//         onClick: ()=>{
//             dispatch({
//                 type: 'ADD-MESSAGE',
//                 newMessage: newMessage
//             })
//         }
//     }
// }
//export const SuperDialodsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialods);