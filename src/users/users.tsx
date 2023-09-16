import u from "./users.module.css";
import userPhoto from "../image/1683353683_kartinkof-club-p-kartinki-smurfikov-23.png";
import React from "react";
import {UserType} from "./users-conteiner";
import {Preloader} from "./preloader/preloader";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../api/api";

type UsersType = {
    users: Array<UserType>
    currentPage: number
    totalUsersCount: number
    pageSize: number
    follow: (userID: number) => void;
    unFollow: (userId: number) => void;
    onPageChanged: (page: number, pageSize: number) => void
    preloader: boolean
    followingProgress: number[]
    toggleFollowingProgressAC: (userId: number, progress: boolean) => void
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
                        ? <button disabled={props.followingProgress.some(i => i === item.id)} onClick={() => {
                            props.toggleFollowingProgressAC(item.id, true)
                            usersAPI.unFollowApi(item.id).then(res => {
                                if (res.resultCode == 0) {
                                    props.follow(item.id)
                                }
                                props.toggleFollowingProgressAC(item.id, false)
                            })
                            props.follow(item.id)
                        }}>unFollow</button>
                        : <button disabled={props.followingProgress.some(i => i === item.id)} onClick={() => {
                            props.toggleFollowingProgressAC(item.id, true)
                            usersAPI.followApi(item.id).then(res => {
                                if (res.data.resultCode == 0) {
                                    props.unFollow(item.id)
                                }
                                props.toggleFollowingProgressAC(item.id, false)
                            })
                            props.unFollow(item.id)
                        }}>Follow</button>}
                    <span>{item.name}</span>
                </div>
            ))}
        </div>
    );
}
