import {UserType} from "../users/users-conteiner";


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const CURRENT_PAGE = 'CURRENT_PAGE'
const Set_Total_Count = 'Set_Total_Count'
const Set_Preloader = 'Set_Preloader'
const SET_PAGE_ID = 'SET_PAGE_ID'

type InitialStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    preloader: boolean
    pageId: null | number
}
const initialState: InitialStateType = {
    users: [],
    pageId: null,
    pageSize: 5,
    totalUsersCount: 101,
    currentPage: 1,
    preloader: false
}


export const usersReduser = (state: InitialStateType = initialState, action: AllType): InitialStateType => {

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

type followACType = ReturnType<typeof followAC>
type unFollowACType = ReturnType<typeof unFollowAC>
type setUsersACType = ReturnType<typeof setUsersAC>
type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type setTotalCountACType = ReturnType<typeof setTotalCountAC>
type setPreloaderACType = ReturnType<typeof setPreloaderAC>
type setPageIdAC = ReturnType<typeof setPageIdAC>


type AllType = followACType
    | unFollowACType
    | setUsersACType
    | setCurrentPageACType
    | setTotalCountACType
    | setPreloaderACType
    | setPageIdAC