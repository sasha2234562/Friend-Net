import {ActionType} from "./store";

const ADD_POST = "ADD-POST";
const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT";

let initialState = {
    posts: [
        {
            img: 'https://variety.com/wp-content/uploads/2022/12/MCDAVTH_WD063.jpg',
            comment: 'My first post'
        },
        {
            img: 'https://www.glamour.pl/media/cache/default_view/uploads/media/default/0006/69/wednesday-addams_1.jpg',
            comment: 'My second post'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM4Jnx9uYxp6Cf-JgtB7wmcAVto0aYhrVmpf--h1B44kBDcV79HKHtCLDPdaw0PUevqG0&usqp=CAU',
            comment: 'My third post'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyRvLjFK4n05DP0OuzXiZA8fOPQ2B_Ha9XLKHRCIcgWV8P4J3KU2Q52nIH9huW_K8EhOI&usqp=CAU',
            comment: 'My fourth post'
        },
    ],
    newPostText: 'Sasha is too lazy'
}


export const AddPostActionCreator = (text: string) => {
    return {
        type: 'ADD-POST', text
    }
}

export const ChangeNewPostTextAC = (newText: string) => {
    return {
        type: 'CHANGE-NEW-POST-TEXT', newText
    }
}
export const profileReducer = (state = initialState, action: ActionType) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                img: 'https://images.kinorium.com/movie/cast/2716535/w150_2058926.jpg?1668595813',
                comment: action.text
            }
            const copyStateNewPost = {
                ...state,
                posts: [...state.posts]
            }
            copyStateNewPost.posts.unshift(newPost);
            copyStateNewPost.newPostText = ''
            return copyStateNewPost
        case CHANGE_NEW_POST_TEXT:
            const  copuStateNewPostText = {
                ...state
            }
            copuStateNewPostText.newPostText = action.newText
            return copuStateNewPostText
    }
    return state
}