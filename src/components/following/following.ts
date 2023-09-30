import {InitialStateType} from "../../redux/user-reduser";

export const following = (state: InitialStateType, followed: boolean, userID: number) => {
    return {
        ...state,
        users: state.users.map(item => {
            return item.id === userID ? {...item, followed} : item
        })
    }
}