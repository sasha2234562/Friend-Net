import Beach from "./well-beach/beach";
import {ContainerPosts} from "./posts/posts-conteiner";
import React from "react";
import {PageUser} from "./well-beach/pageUser";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {getUserProfileThunkCreator, pageType} from "../../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type pathParamsType = {
    userId: string
}

type mapStateToPropsType = {
    pageUser: pageType | null
    isAuth: boolean
}
type mapDispatchToProps = {
    getUserProfileThunkCreator: (userId: string) => void
}
type PropsType = mapStateToPropsType & mapDispatchToProps

type ownPropsType = RouteComponentProps<pathParamsType> & PropsType
export class Well extends React.Component<ownPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = '1'
        }
        this.props.getUserProfileThunkCreator(userId)
    }
    render() {
        if(this.props.isAuth === false) return <Redirect to={'/login'}/>
        return <div>
            <Beach/>
            <PageUser page={this.props.pageUser}/>
            <ContainerPosts/>
        </div>
    }
}

const MapStateToProps = (state: AppStateType) => {
    return {
        pageUser: state.profilePage.profilePage,
        isAuth: state.authReducer.isAuth
    }
}
export const WellContainer = connect(MapStateToProps, {getUserProfileThunkCreator})(Well)
export const  WithRouteContainerWell = withRouter(WellContainer)
