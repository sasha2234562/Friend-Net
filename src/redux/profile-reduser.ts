import {ActionType} from "./store";

export type propsType = {
    posts: Array<post>
    newPostText: string
}


type post = {
    img: string
    comment: string
}

export const profileReducer = (state: propsType, action: ActionType) => {
    if (action.type === 'ADD-POST') {
        let newPost = {
            img: 'https://images.kinorium.com/movie/cast/2716535/w150_2058926.jpg?1668595813',
            comment: action.text
        }
        state.posts.unshift(newPost);
        state.newPostText = ''
    } else if (action.type === 'CHANGE-NEW-POST-TEXT') {
       state.newPostText = action.newText
    }
    return state
}