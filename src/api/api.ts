import axios from "axios";
const instants = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '8a5c1830-8604-4983-b9a4-0d09b4b6ff34'}
})
export const getUsers = (page: number, pageSize: number) => {
    return instants.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${pageSize}`)
        .then(response => response.data)
}

export const unFollowApi = (id: number) => {
    return instants.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
        .then(resolve => resolve.data)
}

export const followApi = (id: number) => {
    return instants.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
        .then(resolve => resolve.data)
}