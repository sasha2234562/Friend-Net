import {MessagesValue} from "./messanges-value";
import {AppStoreType} from "../../../../redux/redux-store";
import {connect} from "react-redux";
import {AddMessageAC, changeMessageAC} from "../../../../redux/message-reduser";
import {Dispatch} from "redux";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";

let mapStateToProps = (state: AppStoreType) => {
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
export default withAuthRedirect (connect(mapStateToProps, mapDispatchToProps)(MessagesValue));