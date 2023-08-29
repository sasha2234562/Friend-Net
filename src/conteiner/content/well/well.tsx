import Beach from "./well-beach/beach";
import {ContainerPosts} from "./posts/posts-conteiner";
import React, {ComponentType} from "react";
import {PageUser} from "./well-beach/pageUser";
import {AppStoreType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {getUserProfileThunkCreator, pageType} from "../../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

type pathParamsType = {
    userId: string
}
type mapStateToPropsType = {
    pageUser: pageType | null
}
type mapDispatchToProps = {
    getUserProfileThunkCreator: (userId: string) => void
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
    }

    render() {
        return <div>
            <Beach/>
            <PageUser page={this.props.pageUser}/>
            <ContainerPosts/>
        </div>
    }
}

const MapStateToProps = (state: AppStoreType) => {
    return {
        pageUser: state.profilePage.profilePage,
    }
}
export default compose<ComponentType>(
    connect(MapStateToProps, {getUserProfileThunkCreator}),
    withRouter,
    withAuthRedirect
)(Well)