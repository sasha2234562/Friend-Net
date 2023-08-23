import axios from "axios";

export const getUsers = (page: number, pageSize: number) => {

    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${pageSize}`,
        {
            withCredentials: true,
        }).then(response=> response.data)
}