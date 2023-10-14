import Beach from "./well-beach/beach";
import {ContainerPosts} from "./posts/posts-conteiner";
import React, {ComponentType, PureComponent} from "react";
import {PageUser} from "./well-beach/pageUser";
import {AppStoreType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {
    getUserProfileThunkCreator,
    pageType,
    savePhotoThunkCreator,
    setStatusThunkCreator,
    UpdateStatusThunkCreator
} from "../../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {MyProfile} from "./my profile/my-profile";
import {MyPage} from "./my-page";

type pathParamsType = {
    userId: string
}
type mapStateToPropsType = {
    pageUser: pageType
    status: string
    me: string
}
type mapDispatchToProps = {
    getUserProfileThunkCreator: (userId: string) => void
    setStatusThunkCreator: (userId: string) => void
    UpdateStatusThunkCreator: (status: string) => void
    savePhotoThunkCreator: (photo: File) => void
}
type PropsType = mapStateToPropsType & mapDispatchToProps

type ownPropsType = RouteComponentProps<pathParamsType> & PropsType

export class Well extends PureComponent<ownPropsType> {
    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.me
        }
        if (!!userId) {
            this.props.getUserProfileThunkCreator(userId)
            this.props.setStatusThunkCreator(userId)
        }
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ownPropsType>) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return <div>
            <Beach/>
            {this.props.me ? <MyPage savePhoto={this.props.savePhotoThunkCreator} page={this.props.pageUser}/> :
                <PageUser page={this.props.pageUser}/>}
            <MyProfile status={this.props.status} updateStatus={this.props.UpdateStatusThunkCreator}/>
            <ContainerPosts/>
        </div>
    }
}

const MapStateToProps = (state: AppStoreType) => {
    return {
        pageUser: state.profilePage.profilePage,
        status: state.profilePage.status,
        me: state.authReducer.id
    }
}
export default compose<ComponentType>(
    connect(MapStateToProps, {
        getUserProfileThunkCreator,
        setStatusThunkCreator,
        UpdateStatusThunkCreator,
        savePhotoThunkCreator
    }),
    withRouter,
    withAuthRedirect,
)(Well)