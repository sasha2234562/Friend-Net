import {MessagesValue} from "./messanges-value";
import {AppStoreType} from "../../../../redux/redux-store";
import {connect} from "react-redux";
import {AddMessageAC, changeMessageAC} from "../../../../redux/message-reduser";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {compose} from "redux";
import React from "react";

let mapStateToProps = (state: AppStoreType) => {
    return {
        messages: state.dialogsPage.messages,
        newMessage: state.dialogsPage.newMessage,
        isAuth: state.authReducer.isAuth
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {changeMessageAC, AddMessageAC}),
    withAuthRedirect
)(MessagesValue)