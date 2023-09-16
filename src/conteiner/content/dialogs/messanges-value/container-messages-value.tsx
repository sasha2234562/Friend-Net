import {MessagesValue} from "./messanges-value";
import {AppStoreType} from "../../../../redux/redux-store";
import {connect} from "react-redux";
import {AddMessageAC} from "../../../../redux/message-reduser";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {compose} from "redux";
import React from "react";

let mapStateToProps = (state: AppStoreType) => {
    return {
        messages: state.dialogsPage.messages
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {AddMessageAC}),
    withAuthRedirect
)(MessagesValue)