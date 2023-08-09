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


export const Users = (props: MapStateToPropsUsers) => {


    return (
        <div>
            {props.uses.map(item => {
                return <div>
                    <img src={item.photo}/>
                    <button>{item.followed}</button>
                    <span>{item.status}</span>

                </div>
            })}
        </div>
    )
}