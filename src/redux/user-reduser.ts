import {UserType} from "../users/users-conteiner";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const CURRENT_PAGE = 'CURRENT_PAGE'
const Set_Total_Count = 'Set_Total_Count'
const Set_Preloader = 'Set_Preloader'
const SET_PAGE_ID = 'SET_PAGE_ID'
const Toggle_Following_Progress = 'Toggle_Following_Progress'

export type InitialStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    preloader: boolean
    pageId: null | number
    followingProgress: number[]
}
const initialState: InitialStateType = {
    users: [],
    pageId: null,
    pageSize: 5,
    totalUsersCount: 57,
    currentPage: 1,
    preloader: false,
    followingProgress: []
}


export const usersReduser = (state: InitialStateType = initialState, action: UsersActionType): InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(item => {
                    return item.id === action.userID ? {...item, followed: false} : item
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(item => {
                    return item.id === action.userID ? {...item, followed: true} : item
                })
            }

        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case CURRENT_PAGE:
            return {...state, currentPage: action.page}

        case Set_Total_Count:
            return {...state, totalUsersCount: action.count}
        case Set_Preloader:
            return {...state, preloader: action.preloader}
        case SET_PAGE_ID :
            return {...state, pageId: action.pageId}
        case Toggle_Following_Progress:
            return {
                ...state,
                followingProgress: action.progress
                    ? [...state.followingProgress, action?.userId]
                    : [...state.followingProgress.filter(i => i !== action.userId)]
            }

    }

    return state
}

export const followAC = (userID: number) => ({type: FOLLOW, userID} as const)
export const unFollowAC = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users} as const)
export const setCurrentPageAC = (page: number) => ({type: CURRENT_PAGE, page} as const)
export const setTotalCountAC = (count: number) => ({type: Set_Total_Count, count} as const)
export const setPreloaderAC = (preloader: boolean) => ({type: Set_Preloader, preloader} as const)
export const setPageIdAC = (pageId: null | number) => ({type: SET_PAGE_ID, pageId} as const)
export const toggleFollowingProgressAC = (userId: number, progress: boolean) => ({
    type: Toggle_Following_Progress,
    userId,
    progress
} as const)


export const getUsersThunkCreator = (currentPage: number, pageSize: number, page: number) => {


    return (dispatch: Dispatch<UsersActionType>) => {

        dispatch(setPreloaderAC(true))
        dispatch(setCurrentPageAC(page))
        usersAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(setPreloaderAC(false))
            dispatch(setUsersAC(response.items))
        });
    }
}
export const followThunkCreator = (userId: number) => (dispatch: Dispatch<UsersActionType>) => {
    dispatch(toggleFollowingProgressAC(userId, true))
    usersAPI.unFollowApi(userId).then(res => {
        if (res.resultCode === 0) {
            dispatch(followAC(userId))
        }
        dispatch(toggleFollowingProgressAC(userId, false))
    })
}
export const unFollowThunkCreator = (userId: number) => (dispatch: Dispatch<UsersActionType>) => {
    dispatch(toggleFollowingProgressAC(userId, true))
    usersAPI.followApi(userId).then(res => {
        console.log(res.resultCode)
        if (res.resultCode === 0) {
            dispatch(unFollowAC(userId))
            dispatch(toggleFollowingProgressAC(userId, false))
        }
        dispatch(toggleFollowingProgressAC(userId, false))
    })
}
type followACType = ReturnType<typeof followAC>
type unFollowACType = ReturnType<typeof unFollowAC>
type setUsersACType = ReturnType<typeof setUsersAC>
type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type setTotalCountACType = ReturnType<typeof setTotalCountAC>
type setPreloaderACType = ReturnType<typeof setPreloaderAC>
type setPageIdACType = ReturnType<typeof setPageIdAC>
type toggleFollowingProgressACType = ReturnType<typeof toggleFollowingProgressAC>

export  type UsersActionType = followACType
    | unFollowACType
    | setUsersACType
    | setCurrentPageACType
    | setTotalCountACType
    | setPreloaderACType
    | setPageIdACType
    | toggleFollowingProgressACType

