import {connect} from "react-redux";
import {AppStoreType} from "../redux/redux-store";
import {
    followAC, followThunkCreator,
    getUsersThunkCreator,
    setTotalCountAC,
    toggleFollowingProgressAC,
    unFollowAC, unFollowThunkCreator
} from "../redux/user-reduser";
import React from "react";
import {Users} from "./users";
import {
    currentPageSelector, followingProgressSelector, pageIdSelector,
    pageSizeSelector, preloaderSelector,
    totalUsersCountSelector,
    usersSelector
} from "./selectors/users-selector";


export type UserType = {
    name: string;
    id: number;
    uniqueUrlName: string;
    photos: {
        small: string;
        large: string;
    }
    status: string;
    followed: boolean;
}

type StatePropsType = {
    users: Array<UserType>;
    totalUsersCount: number
    pageSize: number
    currentPage: number
    preloader: boolean
    followingProgress: number[]
}

export type MapDispatchToPropsType = {
    unFollowAC: (userID: number) => void
    followAC: (userId: number) => void
    setTotalCountAC: (count: number) => void
    toggleFollowingProgressAC: (userId: number, progress: boolean) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number, page: number) => void
    followThunkCreator: (userId: number)=> void
    unFollowThunkCreator: (userId: number)=> void
}

type PropsType = StatePropsType & MapDispatchToPropsType;

class UsersContainerAPI extends React.Component<PropsType> {


    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize, this.props.currentPage)
    }


    onPageChanged = (page: number) => {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize, page)
    }


    render() {
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            users={this.props.users}
            pageSize={this.props.pageSize}
            onPageChanged={this.onPageChanged}
            follow={this.props.followAC}
            unFollow={this.props.unFollowAC}
            preloader={this.props.preloader}
            followingProgress={this.props.followingProgress}
            toggleFollowingProgressAC={this.props.toggleFollowingProgressAC}
            followThunkCreator={this.props.followThunkCreator}
            unFollowThunkCreator={this.props.unFollowThunkCreator}
        />
    }
}


const mapStateToProps = (state: AppStoreType) => {
    return {
        users: usersSelector(state),
        pageSize: pageSizeSelector(state),
        totalUsersCount: totalUsersCountSelector(state),
        currentPage: currentPageSelector(state),
        preloader: preloaderSelector(state),
        pageId: pageIdSelector(state),
        followingProgress: followingProgressSelector(state)
    }
}
export const UsersContainer = connect(mapStateToProps,
    {
        followAC,
        unFollowAC,
        setTotalCountAC,
        toggleFollowingProgressAC,
        getUsersThunkCreator,
        followThunkCreator,
        unFollowThunkCreator
    })(UsersContainerAPI)