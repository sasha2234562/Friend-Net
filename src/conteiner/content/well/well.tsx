import Beach from "./well-beach/beach";
import {ContainerPosts} from "./posts/posts-conteiner";
import React, {ComponentType, PureComponent} from "react";
import {PageUser} from "./well-beach/pageUser";
import {AppStoreType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {
    changeProfileInformation,
    getUserProfileThunkCreator,
    savePhotoThunkCreator,
    setStatusThunkCreator,
    UpdateStatusThunkCreator
} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {MyProfile} from "./my profile/my-profile";
import {MyPage} from "./my-page/my-page";
import {OwnPropsType} from "./well.type";


export class Well extends PureComponent<OwnPropsType> {
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

    componentDidUpdate(prevProps: Readonly<OwnPropsType>) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return <div>
            <Beach/>
            {this.props.me ?
                <MyPage getProfile={this.props.changeProfileInformation} savePhoto={this.props.savePhotoThunkCreator} page={this.props.pageUser}/> :
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
        savePhotoThunkCreator,
        changeProfileInformation
    }),
    withRouter,
    withAuthRedirect,
)(Well)