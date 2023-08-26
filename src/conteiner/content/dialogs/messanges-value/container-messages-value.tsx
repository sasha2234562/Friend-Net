import {MessagesValue} from "./messanges-value";
import {AppStateType} from "../../../../redux/redux-store";
import {connect} from "react-redux";
import {AddMessageAC, changeMessageAC} from "../../../../redux/message-reduser";
import {Dispatch} from "redux";

let mapStateToProps = (state: AppStateType) => {
    return {
        messages: state.dialogsPage.messages,
        newMessage: state.dialogsPage.newMessage,
        isAuth: state.authReducer.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onChange: (newText: string) => {
            dispatch(changeMessageAC(newText));
        },
        addPost: (text: string) => {
            dispatch(AddMessageAC(text))
        }
    }
}
export const ContainerMessagesValue = connect(mapStateToProps, mapDispatchToProps)(MessagesValue);