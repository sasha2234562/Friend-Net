import {ActionType} from "./store";

// export type propsType = {
//     posts: Array<post>
//     newPostText: string
// }
//
//
// type post = {
//     img: string
//     comment: string
// }

const ADD_POST = "ADD-POST";
const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT";

let initialState = {
    posts: [
        {
            img: 'https://variety.com/wp-content/uploads/2022/12/MCDAVTH_WD063.jpg',
            comment: 'My first post'
        },
        {
            img: 'https://www.soyuz.ru/public/uploads/files/2/7615320/202212191629123ffc8dd5e1.jpg',
            comment: 'My second post'
        },
        {
            img: 'https://hips.hearstapps.com/hmg-prod/images/jenna-ortega-wednesday-1671450978.jpg?crop=0.5xw:1xh;center,top&resize=1200:*',
            comment: 'My third post'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyRvLjFK4n05DP0OuzXiZA8fOPQ2B_Ha9XLKHRCIcgWV8P4J3KU2Q52nIH9huW_K8EhOI&usqp=CAU',
            comment: 'My fourth post'
        },
    ],
    newPostText: 'Sasha is too lazy'
}

export const profileReducer = (state = initialState, action: ActionType) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                img: 'https://images.kinorium.com/movie/cast/2716535/w150_2058926.jpg?1668595813',
                comment: action.text
            }
            state.posts.unshift(newPost);
            state.newPostText = ''
            return state
        case CHANGE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
    }
    return state
}