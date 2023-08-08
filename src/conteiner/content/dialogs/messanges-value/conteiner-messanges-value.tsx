import React from "react";
import {MessangesValue} from "./messanges-value";
// import {storeType} from "../../../../index";
//import {actionNewMessage} from "../../../../redux/message-reduser";
import {text} from "stream/consumers";
import {testAC} from "../../../../redux/message-reduser";




export const ConteinerMessangesValue = (props: any) => {

    let dialogs = props.state
    console.log(dialogs.dialogsPage.newMessage)
    // let [newMessage, setNewMessage] = useState('')

    const onChange = (event: string) => {
        // setNewMessage(event);
       event && props.dispatch({
            type: 'CHANGE-NEW-MESSAGE',
            newText: event
        })
        dialogs.dialogsPage.newMessage = event
    }

    const onClick = () => {
        props.dispatch(
        //     {//
        //     type: 'ADD-MESSAGE',
        //     newMessage: dialogs.dialogsPage.newMessage
        //     // newMessage: 'dfsfsdf'
        // }
testAC(dialogs.dialogsPage.newMessage))
        // setNewMessage('')
   }

    return <MessangesValue
        onClick={onClick}
        messages={dialogs.dialogsPage.messages}
        onChange={onChange}
        newMessage={dialogs.dialogsPage.newMessage}
        value={dialogs.dialogsPage.newMessage}
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