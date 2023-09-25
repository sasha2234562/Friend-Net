import {AppStoreType} from "../../redux/redux-store";
import {createSelector} from "reselect";

export const getUsersSelector = (state: AppStoreType) => {
    return state.users.users
}
export const usersSelector = createSelector(getUsersSelector, (users) => {
    return users.filter(item => item)
})

export const pageSizeSelector = (state: AppStoreType) => {
    return state.users.pageSize
}
export const totalUsersCountSelector = (state: AppStoreType) => {
    return state.users.totalUsersCount
}
export const currentPageSelector = (state: AppStoreType) => {
    return state.users.currentPage
}
export const preloaderSelector = (state: AppStoreType) => {
    return state.users.preloader
}
export const pageIdSelector = (state: AppStoreType) => {
    return state.users.pageId
}
export const followingProgressSelector = (state: AppStoreType) => {
    return state.users.followingProgress
}