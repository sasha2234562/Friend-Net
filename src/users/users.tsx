import u from './users.module.css'
import axios from "axios";
import userPhoto from "../image/avatar photo for profile.png"


export type UserType =     {
    "name": string,
    "id": number | string,
    "uniqueUrlName": string,
    "photos": {
        "small":  string,
        "large":  string
    },
    "status":  string,
    "followed": boolean
}
type StatePropsType = MapStateToPropsUsersType & MapDispatchToPropsType

export type MapStateToPropsUsersType = {
    users: Array<UserType>
}
type MapDispatchToPropsType = {
    follow: (userID: string | number) => void
    unFollow: (userId: string | number) => void
    setUsers: (users: Array<UserType>) => void

}

export const Users = (props: StatePropsType) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => props.setUsers(response.data.items) )
    }

    return (
        <div>
            {props.users.map(item => {
                return <div key={item.id} className={u.appearance}>
                    <img src={item.photos.small ? item.photos.small : userPhoto} className={u.img}/>
                    {item.followed
                        ? <button onClick={() => props.follow(item.id)}>follow</button>
                        : <button onClick={() => props.unFollow(item.id)}>unFollow</button>}
                    <span>{item.status}</span>
                    {/*<span>{item.location.country}</span>*/}
                    {/*<span>{item.location.cityName}</span>*/}
                </div>
            })}
        </div>
    )
}