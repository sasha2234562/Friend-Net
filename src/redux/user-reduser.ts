import {UserType} from "../users/users";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
type InitialAtateType = {
    users: UserType[]
}
const initialState: InitialAtateType = {
   users:  []
}


export const usersReduser = (state:InitialAtateType = initialState, action: AllType):InitialAtateType => {
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
                ...state, users: [...state.users, ...action.users]
            }


    }
    return state
}

export const followAC = (userID: number) => ({type: FOLLOW, userID} as const)

export const unFollowAC = (userID: number) => ({type: UNFOLLOW, userID} as const)

export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users} as const)

type followACType = ReturnType<typeof followAC>
type unFollowACType = ReturnType<typeof unFollowAC>
type setUsersACType = ReturnType<typeof setUsersAC>

type AllType = followACType | unFollowACType | setUsersACType