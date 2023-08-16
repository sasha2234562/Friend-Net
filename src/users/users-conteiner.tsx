import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {setCurrentPageAC, followAC, setUsersAC, unFollowAC, setTotalCountAC} from "../redux/user-reduser";
import React from "react";
import axios from "axios";
import {Users} from "./users";



    export type UserType = {
        name: string;
        id: number;
        uniqueUrlName: string;
        photos: {
            small: string;
            large: string;
        };
        status: string;
        followed: boolean;
    }

    type StatePropsType = {
        users: Array<UserType>;
        totalUsersCount: number
        pageSize: number
        currentPage: number
    }

export    type MapDispatchToPropsType = {
        follow: (userID: number) => void;
        unFollow: (userId: number) => void;
        setUsers: (users: Array<UserType>) => void;
        setCurrentPage: (page: number) => void;
        setTotalCount: (count: number) => void
    }

    type PropsType = StatePropsType & MapDispatchToPropsType;

    class UsersContainerAPI extends React.Component<PropsType> {


        componentDidMount() {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    // this.props.setTotalCount(response.data.totalCount)
                    console.log(response.data)
                });
        }


        onPageHandler(page: number) {
            this.props.setCurrentPage(page)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
                .then(response => this.props.setUsers(response.data.items));
        }
        render() {
            return <Users
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                users={this.props.users}
                pageSize={this.props.pageSize}
                onPageHandler={this.onPageHandler}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
            />
        }
    }




const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalCount: (count: number) => {
            dispatch(setTotalCountAC(count))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerAPI)