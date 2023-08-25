import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {
    followAC,
    getUsersThunkCreator,
    setCurrentPageAC,
    setPreloaderAC,
    setTotalCountAC,
    setUsersAC,
    toggleFollowingProgressAC,
    unFollowAC
} from "../redux/user-reduser";
import React from "react";
import {Users} from "./users";
import {getUsers} from "../api/api";


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
    setUsersAC: (users: Array<UserType>) => void
    setCurrentPageAC: (page: number) => void
    setPreloaderAC: (preloader: boolean) => void
    setTotalCountAC: (count: number) => void
    toggleFollowingProgressAC: (userId: number, progress: boolean) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
}

type PropsType = StatePropsType & MapDispatchToPropsType;

class UsersContainerAPI extends React.Component<PropsType> {


    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }


    onPageChanged = (page: number) => {
        this.props.setPreloaderAC(true)
        this.props.setCurrentPageAC(page)
        getUsers(page, this.props.pageSize).then(response => {
            this.props.setPreloaderAC(false)
            this.props.setUsersAC(response.items)
        });
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
        />
    }
}


const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        preloader: state.users.preloader,
        pageId: state.users.pageId,
        followingProgress: state.users.followingProgress
    }
}
export const UsersContainer = connect(mapStateToProps,
    {
        followAC,
        unFollowAC,
        setUsersAC,
        setCurrentPageAC,
        setPreloaderAC,
        setTotalCountAC,
        toggleFollowingProgressAC,
        getUsersThunkCreator
    })(UsersContainerAPI)