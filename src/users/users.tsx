import u from "./users.module.css";
import userPhoto from "../image/avatar photo for profile.png";
import React from "react";
import {UserType} from "./users-conteiner";
import {Preloader} from "./preloader/preloader";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersType = {
    users: Array<UserType>
    currentPage: number
    totalUsersCount: number
    pageSize: number
    follow: (userID: number) => void;
    unFollow: (userId: number) => void;
    onPageChanged: (page: number, pageSize: number) => void
    preloader: boolean
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
                    <div className={u.avatar}>
                        {!props.preloader ?
                            <NavLink to={`/profile/${item.id}`}>
                                <img src={item.photos.small ? item.photos.small : userPhoto}
                                     className={u.img}
                                     alt="user avatar"/>
                            </NavLink>
                            : <Preloader/>}
                    </div>
                    {item.followed
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${item.id}`, {
                                withCredentials: true,
                                headers: {'API-KEY': '8a5c1830-8604-4983-b9a4-0d09b4b6ff34'}
                            })
                                .then(res => {
                                    if (res.data.resultCode == 0) {
                                        props.follow(item.id)
                                    }
                                })
                            props.follow(item.id)
                        }}>unFollow</button>
                        : <button onClick={() =>{
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${item.id}`,{}, {
                                withCredentials: true,
                                headers: {'API-KEY': '8a5c1830-8604-4983-b9a4-0d09b4b6ff34'}
                            })
                                .then(res => {
                                    console.log(res.data.resultCode)
                                    if (res.data.resultCode == 0) {
                                        props.unFollow(item.id)
                                    }
                                })
                            props.unFollow(item.id)
                        }}>Follow</button>}
                    <span>{item.name}</span>
                </div>
            ))}
        </div>
    );
}
