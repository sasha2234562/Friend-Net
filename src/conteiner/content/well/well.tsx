import Beach from "./well-beach/beach";
import {ContainerPosts} from "./posts/posts-conteiner";
import React from "react";
import {PageUser} from "./well-beach/PageUser";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {pageType, ProfilePageAC} from "../../../redux/profile-reducer";
import axios from "axios";
import {RouteComponentProps, withRouter} from "react-router-dom";

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.page(response.data)
                console.log(response.data)
            });
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
