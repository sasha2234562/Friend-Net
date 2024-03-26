import axios from "axios";
import {FormDataType} from "../conteiner/content/well/my-page/my-page.type";

const instants = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '02801dc9-c643-40b7-9ded-224fb486763d'}
})
export const usersAPI = {
    getUsers(page: number, pageSize: number) {
        return instants.get(`users?page=${page}&count=${pageSize}`)
            .then(response => response.data)
    },
    unFollowApi(id: number) {
        return instants.delete(`follow/${id}`)
            .then(resolve => resolve.data)
    },
    followApi(id: number) {
        return instants.post(`follow/${id}`)
            .then(resolve => resolve.data)
    },
    profileApi(userId: string) {
        return statusAPI.getProfile(userId)
    }
}
export const authAPI = {
    me() {
        return instants.get('auth/me')
    },
    login(email: string, password: string, rememberMe: boolean, captcha?: string) {
        return instants.post('auth/login', {email, password, rememberMe, captcha})
    },
    logAut() {
        return instants.delete('auth/login')
    }
}

export const securityAPI = {
    captcha() {
        return instants.get('security/get-captcha-url')
    }
}

export const statusAPI = {
    getProfile(userId: string) {
        return instants.get(`profile/${userId}`)
    },
    getStatus(userId: string) {
        return instants.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instants.put<{ data: {}, resultCode: number }>('profile/status', {status})
    },
    savePhoto(photo: File) {
        const formData = new FormData()
        formData.append('image', photo)
        return instants.put('profile/photo', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
    },
    updateData(information: FormDataType) {
        return instants.put('profile', information)
    }
}