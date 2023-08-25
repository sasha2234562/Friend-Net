import Beach from "./well-beach/beach";
import {ContainerPosts} from "./posts/posts-conteiner";
import React from "react";
import {PageUser} from "./well-beach/pageUser";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {pageType, ProfilePageAC} from "../../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {profileApi} from "../../../api/api";

type pathParamsType = {
    userId: string
}

type mapStateToPropsType = {
    pageUser: pageType | null
}
type mapDispatchToProps = {
    page: (userPage: pageType) => void
}
type PropsType = mapStateToPropsType & mapDispatchToProps

type ownPropsType = RouteComponentProps<pathParamsType> & PropsType
export class Well extends React.Component<ownPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = '1'
        }
       (profileApi(userId).then(response => this.props.page(response.data)))
    }
    render() {
        return <div>
            <Beach/>
            <PageUser page={this.props.pageUser}/>
            <ContainerPosts/>
        </div>
    }
}

const MapStateToProps = (state: AppStateType) => {
    return {
        pageUser: state.profilePage.profilePage
    }
}
const MapDispatchToProps = (dispatch: Dispatch) => {
    return {
        page: (page: pageType) => {
            dispatch(ProfilePageAC(page))
        }
    }
}
export const WellContainer = connect(MapStateToProps, MapDispatchToProps)(Well)
export const  WithRouteContainerWell = withRouter(WellContainer)
