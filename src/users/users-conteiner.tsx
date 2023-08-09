import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {Users} from "./users";
import {followAC, setUsersAC, unFollowAC} from "../redux/user-reduser";


const mapStateToProps = (state: AppStateType) => {
    return {
        photo: state.users.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userID: string) => {
            dispatch(followAC(userID))
        },
        unFollow: (userId: string) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: any) => {
            dispatch(users)
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)