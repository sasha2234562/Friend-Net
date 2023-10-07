import u from "./users.module.css";
import userPhoto from "../image/1683353683_kartinkof-club-p-kartinki-smurfikov-23.png";
import React from "react";
import {UserType} from "./users-conteiner";
import {Preloader} from "../components/preloader/preloader";
import {NavLink} from "react-router-dom";
import {Paginator} from "../components/Paginator/paginator";

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
    followThunkCreator: (userId: number) => void
    unFollowThunkCreator: (userId: number) => void
}

export const Users = React.memo((props: UsersType) => {
    return (
        <div>
            <Paginator pageSize={props.pageSize}
                       onPageChanged={props.onPageChanged}
                       totalUsersCount={props.totalUsersCount}
                       currentPage={props.currentPage}/>

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

                        ? <button
                            disabled={props.followingProgress.some(i => i === item.id)}
                            onClick={() => props.followThunkCreator(item.id)
                            }>unFollow</button>
                        : <button
                            disabled={props.followingProgress.some(i => i === item.id)}
                            onClick={() => props.unFollowThunkCreator(item.id)}
                        >Follow</button>}
                    <span>{item.name}</span>
                </div>
            ))}
        </div>
    );
})


