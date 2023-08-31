import React, {ChangeEvent, useState} from "react";


export const MyProfile = () => {
    const [status, setStatus] = useState<boolean>(true)
    const [value, setValue] = useState('Hello my friends')

    const clickHandler = () => {
        setStatus(true)
    }
    const onBlurHandler = () => {
        setStatus(false)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
const saveClick = ()=> {
        setStatus(true)
}


    return (
        <div>
            {
                status
                    ? <div>
                        <span onDoubleClick={onBlurHandler}>{value}</span>
                    </div>
                    : <div>
                        <input
                            type="text"
                            value={value}
                            onChange={onChangeHandler}
                            onBlur={clickHandler}
                            autoFocus
                        />
                    </div>}
            <button onClick={saveClick}>Save</button>
        </div>
    )
}

// export class MyProfile extends React.Component<Component> {
//     constructor() {
// this.status =
//     }
//
//     render() {
//         return <div>
//             <div>
//                 <span>{this.props.status}</span>
//             </div>
//             <div>
//                 <input value={status} type={"text"}/>
//             </div>
//         </div>
//     }
// }