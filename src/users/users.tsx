import React from 'react';
import u from './users.module.css';
import axios from "axios";
import userPhoto from "../image/avatar photo for profile.png"

export type UserType = {
    name: string;
    id: number;
    uniqueUrlName: string;
    photos: {
        small: string;
        large: string;
    };
    status: string;
    followed: boolean;
}

type StatePropsType = {
    users: Array<UserType>;
    totalUsersCount: number
    pageSize: number
    currentPage: number
}

type MapDispatchToPropsType = {
    follow: (userID: number) => void;
    unFollow: (userId: number) => void;
    setUsers: (users: Array<UserType>) => void;
    setCurrentPage: (page: number) => void;
    setTotalCount: (count: number) => void
}

type PropsType = StatePropsType & MapDispatchToPropsType;

class Users extends React.Component<PropsType> {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                // this.props.setTotalCount(response.data.totalCount)
                console.log(response.data)
            });
    }


    onPageHandler(page: number) {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items));
    }

    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                <div className={u.numberPage}>
                    {pages.map((item, index) => {
                        return <span
                            className={this.props.currentPage === item ? u.active : ''}
                            key={index}
                            onClick={() => this.onPageHandler(item)}>
                            {item}
                        </span>
                    })}
                </div>

                {this.props.users.map(item => (
                    <div key={item.id} className={u.appearance}>
                        <img src={item.photos.small ? item.photos.small : userPhoto} className={u.img}
                             alt="user avatar"/>
                        {item.followed
                            ? <button onClick={() => this.props.follow(item.id)}>Follow</button>
                            : <button onClick={() => this.props.unFollow(item.id)}>unFollow</button>}
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
        );
    }
}

export default Users