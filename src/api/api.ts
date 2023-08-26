import axios from "axios";

const instants = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '8a5c1830-8604-4983-b9a4-0d09b4b6ff34'}
})
export const usersAPI = {
    getUsers (page: number, pageSize: number) {
        return instants.get(`users?page=${page}&count=${pageSize}`)
            .then(response => response.data)
    },
    unFollowApi (id: number) {
        return instants.delete(`follow/${id}`)
            .then(resolve => resolve.data)
    },
    followApi (id: number) {
        return instants.post(`follow/${id}`)
            .then(resolve => resolve.data)
    },
    profileApi (userId: string) {
        return instants.get(`profile/${userId}`)
    }
}
export const authAPI = {
    me() {
        return instants.get('auth/me')
    }
}