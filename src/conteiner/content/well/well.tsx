import Beach from "./well-beach/beach";
import {ContainerPosts} from "./posts/posts-conteiner";
import React, {ComponentType} from "react";
import {PageUser} from "./well-beach/pageUser";
import {AppStoreType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {
    setStatusThunkCreator,
    getUserProfileThunkCreator,
    pageType,
    UpdateStatusThunkCreator
} from "../../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {MyProfile} from "./my profile/my profile";

type pathParamsType = {
    userId: string
}
type mapStateToPropsType = {
    pageUser: pageType | null
    status: string
}
type mapDispatchToProps = {
    getUserProfileThunkCreator: (userId: string) => void
    setStatusThunkCreator: (userId: string) => void
    UpdateStatusThunkCreator: (status: string) => void
}
type PropsType = mapStateToPropsType & mapDispatchToProps

type ownPropsType = RouteComponentProps<pathParamsType> & PropsType

export class Well extends React.Component<ownPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '1'
        }
        this.props.getUserProfileThunkCreator(userId)
        this.props.setStatusThunkCreator(userId)
    }

    render() {
        return <div>
            <Beach/>
            <PageUser page={this.props.pageUser}/>
            <MyProfile status={this.props.status} updateStatus={this.props.UpdateStatusThunkCreator}/>
            <ContainerPosts/>
        </div>
    }
}

const MapStateToProps = (state: AppStoreType) => {
    return {
        pageUser: state.profilePage.profilePage,
        status: state.profilePage.status
    }
}
export default compose<ComponentType>(
    connect(MapStateToProps, {
        getUserProfileThunkCreator,
        setStatusThunkCreator,
        UpdateStatusThunkCreator
    }),
    withRouter,
    withAuthRedirect,
)(Well)