import {v1} from "uuid";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

const initialState = {
    users: [
        {
            id: v1(), name: 'Sasha', followed: true, status: 'I\'am man ',
            location: {
                cityName: 'Hanoi',
                country: 'Vietnam'
            },
            photo: 'https://assets.gq.ru/photos/602b778f6fc740d3f63c4faa/1:1/w_1600%2Cc_limit/120121_Anime_03.jpg'
        },
        {
            id: v1(), name: 'Dasha', followed: true, status: 'I\'am women ',
            location: {
                cityName: 'Vitebsk',
                country: 'Belarus'
            },
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM5yQJfYX072PTGOv1rcPqmFxctGijlCL0MQ&usqp=CAU'
        },
        {
            id: v1(), name: 'Masha', followed: false, status: 'I\'am women ',
            location: {
                cityName: 'Minsk',
                country: 'Belarus'
            },
            photo: 'https://img.freepik.com/free-photo/the-girl-in-the-sky_1340-27755.jpg'
        },
        {
            id: v1(), name: 'Alex', followed: false, status: 'I\'am man ',
            location: {
                cityName: 'Moscow',
                country: 'Russia'
            },
            photo: 'https://avatars.mds.yandex.net/i?id=1734dc3ff9417d6092956f5da41811a1-4416220-images-thumbs&n=13'
        }
    ]
}


export const usersReduser = (state = initialState, action: AllType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(item => {
                    return item.id === action.userID ? item.followed = true : item
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(item => {
                    return item.id === action.userID ? item.followed = false : item
                })
            }

        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }


    }
    return state
}

export const followAC = (userID: string) => ({type: FOLLOW, userID} as const)

export const unFollowAC = (userID: string) => ({type: UNFOLLOW, userID} as const)

export const setUsersAC = (users: any) => ({type: SET_USERS, users} as const)

type followACType = ReturnType<typeof followAC>
type unFollowACType = ReturnType<typeof unFollowAC>
type setUsersACType = ReturnType<typeof setUsersAC>

type AllType = followACType | unFollowACType | setUsersACType