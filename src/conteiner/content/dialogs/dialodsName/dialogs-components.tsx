import d from "../dialogs.module.css";
import {NavLink} from "react-router-dom";

type messageType = {
    dialodsName: Array<DialogsType>
}

type DialogsType = {
    name: string
    id: string

}

export const DialogsComponent = (props: messageType) => {
    return (
        <div>
            {props.dialodsName.map((item) => {
                return (
                    <div key={item.id} className={d.dialog}>
                        <img
                            src={'https://hips.hearstapps.com/hmg-prod/images/gh-2023-girl-name-trends-wednesday-resize-1671220446.jpeg?crop=0.565xw:1.00xh;0.218xw,0&resize=980:*'}/>
                        <>
                            <NavLink to={`/dialogs/${item.id}`}>  {item.name}</NavLink>
                        </>
                    </div>
                )
            })}
        </div>
    )
}