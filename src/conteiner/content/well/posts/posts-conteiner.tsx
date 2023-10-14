import {Posts} from "./posts";
import {connect} from "react-redux";
import {AppStoreType} from "../../../../redux/redux-store";
import {AddPostAC, DeletePostAC} from "../../../../redux/profile-reducer";

let mapStateToProps = (state: AppStoreType) => {
    return {
        posts: state.profilePage.posts
    }
}

export const ContainerPosts = connect(mapStateToProps, {AddPostAC, DeletePostAC})(Posts)