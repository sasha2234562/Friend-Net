import u from "./users.module.css";
import userPhoto from "../image/avatar photo for profile.png";
import React from "react";
import {UserType} from "./users-conteiner";
import {Preloader} from "./preloader/preloader";
import {NavLink} from "react-router-dom";

type UsersType = {
    users: Array<UserType>
    currentPage: number
    totalUsersCount: number
    pageSize: number
    follow: (userID: number) => void;
    unFollow: (userId: number) => void;
    onPageChanged: (page: number, pageSize: number) => void
    preloader: boolean
    pageId: (pageId: null | number)=> void
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
                            <NavLink to={'/profile'}>
                                <img src={item.photos.small ? item.photos.small : userPhoto}
                                     className={u.img}
                                     onClick={()=> props.pageId(item.id)}
                                     alt="user avatar"/>
                            </NavLink>
                            : <Preloader/>}
                    </div>
                    {item.followed
                        ? <button onClick={() => props.follow(item.id)}>Follow</button>
                        : <button onClick={() => props.unFollow(item.id)}>unFollow</button>}
                    <span>{item.name}</span>
                </div>
            ))}
        </div>
    );
}
