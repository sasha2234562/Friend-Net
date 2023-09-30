import {Dispatch} from "redux";
import {statusAPI, usersAPI} from "../api/api";
import {v1} from "uuid";

let initialState: initialStateType = {
    posts: [
        {
            img: 'https://variety.com/wp-content/uploads/2022/12/MCDAVTH_WD063.jpg',
            comment: 'My first post',
            id: v1()
        },
        {
            img: 'https://www.glamour.pl/media/cache/default_view/uploads/media/default/0006/69/wednesday-addams_1.jpg',
            comment: 'My second post',
            id: v1()
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM4Jnx9uYxp6Cf-JgtB7wmcAVto0aYhrVmpf--h1B44kBDcV79HKHtCLDPdaw0PUevqG0&usqp=CAU',
            comment: 'My third post',
            id: v1()
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyRvLjFK4n05DP0OuzXiZA8fOPQ2B_Ha9XLKHRCIcgWV8P4J3KU2Q52nIH9huW_K8EhOI&usqp=CAU',
            comment: 'My fourth post',
            id: v1()
        },
    ],
    status: '',
    profilePage: null
}

//reducer
export const profileReducer = (state: initialStateType = initialState, action: ProfileActionType): initialStateType => {

    switch (action.type) {
        case 'ADD_POST':
            let newPost = {
                img: 'https://images.kinorium.com/movie/cast/2716535/w150_2058926.jpg?1668595813',
                comment: action.text,
                id: v1()
            }
            return {
                ...state,
                posts: [newPost, ...state.posts]
            }
        case 'PROFILE_PAGE' :
            return {
                ...state, profilePage: action.page
            }
        case 'GET_STATUS':
            return {
                ...state,
                status: action.status || 'No status this person'
            }
        case 'DELETE_POST': {
            return {
                ...state, posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
    }
    return state
}

//actions
export const AddPostAC = (text: string) => ({type: ADD_POST, text} as const)
export const SetStatusAC = (status: string) => ({type: GET_STATUS, status} as const)
export const ProfilePageAC = (page: pageType) => ({type: PROFILE_PAGE, page} as const)
export const DeletePostAC = (postId: string) => ({type: DELETE_POST, postId} as const)

//thunks
export const getUserProfileThunkCreator = (userId: string) => async (dispatch: Dispatch) => {
    const response = await usersAPI.profileApi(userId)
    dispatch(ProfilePageAC(response.data))
}
export const setStatusThunkCreator = (userId: string) => async (dispatch: Dispatch) => {
    const resolve = await statusAPI.getStatus(userId)
    dispatch(SetStatusAC(resolve.data)
    )
}
export const UpdateStatusThunkCreator = (status: string) => async (dispatch: Dispatch) => {
    const resolve = await statusAPI.updateStatus(status)
    if (resolve.data.resultCode === 0) {
        dispatch(SetStatusAC(status))
    }
}

//types
const ADD_POST = "ADD_POST";
const PROFILE_PAGE = 'PROFILE_PAGE'
const GET_STATUS = 'GET_STATUS'
const DELETE_POST = 'DELETE_POST'
export type pageType = {
    "aboutMe": string,
    "contacts": {
        "facebook": string,
        "website": null | string,
        "vk": null | string,
        "twitter": null | string,
        "instagram": null | string,
        "youtube": null | string,
        "github": null | string,
        "mainLink": null | string
    },
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string,
    "fullName": string,
    "userId": number,
    "photos": {
        "small": string,
        "large": string
    }
}

export type initialStateType = {
    posts: {
        img: string
        comment: string
        id: string
    }[]
    status: string
    profilePage: pageType | null
}
type  AddPostACType = ReturnType<typeof AddPostAC>
type ProfilePageACType = ReturnType<typeof ProfilePageAC>
type GetStatusACType = ReturnType<typeof SetStatusAC>
type DeletePostACType = ReturnType<typeof DeletePostAC>

export type ProfileActionType = AddPostACType | ProfilePageACType | GetStatusACType | DeletePostACType