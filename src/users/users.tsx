import u from "./users.module.css";
import userPhoto from "../image/avatar photo for profile.png";
import React from "react";
import {UserType} from "./users-conteiner";

type UsersType = {
    users: Array<UserType>
    currentPage: number
    totalUsersCount: number
    pageSize: number
    follow: (userID: number) => void;
    unFollow: (userId: number) => void;
    onPageChanged: (page: number, pageSize: number) => void
}

export const Users = (props: UsersType) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={u.numberPage}>
                {pages.map((item, index) => {
                    return <span
                        className={props.currentPage === item ? u.active : ''}
                        key={index}
                        onClick={() => props.onPageChanged(item, props.pageSize)}>
                            {item}
                        </span>
                })}
            </div>

            {props.users.map(item => (
                <div key={item.id} className={u.appearance}>
                    <img src={item.photos.small ? item.photos.small : userPhoto} className={u.img}
                         alt="user avatar"/>
                    {item.followed
                        ? <button onClick={() => props.follow(item.id)}>Follow</button>
                        : <button onClick={() => props.unFollow(item.id)}>unFollow</button>}
                    <span>{item.name}</span>
                </div>
            ))}
        </div>
    );
}


// import React from 'react';
// import u from './users.module.css';
// import axios from "axios";
// import userPhoto from "../image/avatar photo for profile.png"
//
// export type UserType = {
//     name: string;
//     id: number;
//     uniqueUrlName: string;
//     photos: {
//         small: string;
//         large: string;
//     };
//     status: string;
//     followed: boolean;
// }
//
// type StatePropsType = {
//     users: Array<UserType>;
//     totalUsersCount: number
//     pageSize: number
//     currentPage: number
// }
//
// type MapDispatchToPropsType = {
//     follow: (userID: number) => void;
//     unFollow: (userId: number) => void;
//     setUsers: (users: Array<UserType>) => void;
//     setCurrentPage: (page: number) => void;
//     setTotalCount: (count: number) => void
// }
//
// type PropsType = StatePropsType & MapDispatchToPropsType;
//
// class Users extends React.Component<PropsType> {
//
//
//     componentDidMount() {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
//             .then(response => {
//                 this.props.setUsers(response.data.items)
//                 // this.props.setTotalCount(response.data.totalCount)
//                 console.log(response.data)
//             });
//     }
//
//
//     onPageHandler(page: number) {
//         this.props.setCurrentPage(page)
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
//             .then(response => this.props.setUsers(response.data.items));
//     }
//
//     // render() {
//
//
//     // }
// }
//
// export default Users