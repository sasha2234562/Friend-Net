type StatePropsType = MapStateToPropsUsers & MapDispatchToProps

type MapStateToPropsUsers = {
    uses: Array<
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


    return (
        <div>
            {props.uses.map(item => {
                return <div key={item.id}>
                    <img src={item.photo}/>
                    {item.followed
                        ? <button onClick={() => props.follow(item.id)}>{item.followed}</button>
                        : <button onClick={() => props.follow(item.id)}>{item.followed}</button>}
                    <span>{item.status}</span>
                    <span>{item.location.country}</span>
                    <span>{item.location.cityName}</span>
                </div>
            })}
        </div>
    )
}