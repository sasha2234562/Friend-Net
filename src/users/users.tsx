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
                //console.log(response.data.items))
    }

    // useEffect(() => {
    //     props.setUsers([
    //         {
    //             id: v1(), name: 'Sasha', followed: true, status: 'I\'am man ',
    //             location: {
    //                 cityName: 'Hanoi',
    //                 country: 'Vietnam'
    //             },
    //             photo: 'https://assets.gq.ru/photos/602b778f6fc740d3f63c4faa/1:1/w_1600%2Cc_limit/120121_Anime_03.jpg'
    //         },
    //         {
    //             id: v1(), name: 'Dasha', followed: true, status: 'I\'am women ',
    //             location: {
    //                 cityName: 'Vitebsk',
    //                 country: 'Belarus'
    //             },
    //             photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM5yQJfYX072PTGOv1rcPqmFxctGijlCL0MQ&usqp=CAU'
    //         },
    //         {
    //             id: v1(), name: 'Masha', followed: false, status: 'I\'am women ',
    //             location: {
    //                 cityName: 'Minsk',
    //                 country: 'Belarus'
    //             },
    //             photo: 'https://img.freepik.com/free-photo/the-girl-in-the-sky_1340-27755.jpg'
    //         },
    //         {
    //             id: v1(), name: 'Alex', followed: false, status: 'I\'am man ',
    //             location: {
    //                 cityName: 'Moscow',
    //                 country: 'Russia'
    //             },
    //             photo: 'https://avatars.mds.yandex.net/i?id=1734dc3ff9417d6092956f5da41811a1-4416220-images-thumbs&n=13'
    //         }
    //     ])
    // }, [])

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