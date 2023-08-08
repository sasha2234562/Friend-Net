import {Posts} from "./posts";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";
import {AddPostActionCreator, ChangeNewPostTextAC} from "../../../../redux/profile-reducer";

let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}


let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onChange: (e: string) => {
            dispatch(ChangeNewPostTextAC(e))
        },
        addPost: (newPostText: string) => {
            dispatch(AddPostActionCreator(newPostText))
        }
    }
}

export const ContainerPosts = connect(mapStateToProps, mapDispatchToProps)(Posts)