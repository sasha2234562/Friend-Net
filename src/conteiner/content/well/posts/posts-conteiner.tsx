import {Posts} from "./posts";
import {connect} from "react-redux";
import {AppStoreType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";
import {AddPostAC, ChangeNewPostTextAC} from "../../../../redux/profile-reducer";

let mapStateToProps = (state: AppStoreType) => {
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
            dispatch(AddPostAC(newPostText))
        }
    }
}

export const ContainerPosts = connect(mapStateToProps, mapDispatchToProps)(Posts)