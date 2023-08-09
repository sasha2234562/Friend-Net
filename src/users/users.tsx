import {v1} from "uuid";

type StatePropsType = MapStateToPropsUsers & MapDispatchToProps

 export type MapStateToPropsUsers = {
    users: Array<
        {
            id: string
            name: string,
            followed: boolean,
            status: string,
            location: {
                cityName: string,
                country: string
            },
            photo: string

        }>
}
type MapDispatchToProps = {
    follow: (userID: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: any) => void

}

export const Users = (props: StatePropsType) => {
props.setUsers( [
        {
            id: v1(), name: 'Sasha', followed: true, status: 'I\'am man ',
            location: {
                cityName: 'Hanoi',
                country: 'Vietnam'
            },
            photo: 'https://assets.gq.ru/photos/602b778f6fc740d3f63c4faa/1:1/w_1600%2Cc_limit/120121_Anime_03.jpg'
        },
        {
            id: v1(), name: 'Dasha', followed: true, status: 'I\'am women ',
            location: {
                cityName: 'Vitebsk',
                country: 'Belarus'
            },
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM5yQJfYX072PTGOv1rcPqmFxctGijlCL0MQ&usqp=CAU'
        },
        {
            id: v1(), name: 'Masha', followed: false, status: 'I\'am women ',
            location: {
                cityName: 'Minsk',
                country: 'Belarus'
            },
            photo: 'https://img.freepik.com/free-photo/the-girl-in-the-sky_1340-27755.jpg'
        },
        {
            id: v1(), name: 'Alex', followed: false, status: 'I\'am man ',
            location: {
                cityName: 'Moscow',
                country: 'Russia'
            },
            photo: 'https://avatars.mds.yandex.net/i?id=1734dc3ff9417d6092956f5da41811a1-4416220-images-thumbs&n=13'
        }
    ])

    return (
        <div>
            {props.users.map(item => {
                return <div key={item.id}>
                    <img src={item.photo}/>
                    {item.followed
                        ? <button onClick={() => props.follow(item.id)}>{item.followed}</button>
                        : <button onClick={() => props.unFollow(item.id)}>{item.followed}</button>}
                    <span>{item.status}</span>
                    <span>{item.location.country}</span>
                    <span>{item.location.cityName}</span>
                </div>
            })}
        </div>
    )
}