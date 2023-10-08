import React, {ChangeEvent, useEffect, useState} from "react";

type StatePropsType = {
    status: string,
    updateStatus: (status: string) => void
};
export const MyProfile = (props: StatePropsType) => {

    const [status, setStatus] = useState<string>(props.status)
    const [editMode, setEditMode] = useState<boolean>(false)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    const onClickHandler = () => {
        props.updateStatus(status)
        setEditMode(false)
    }
    const onDoubleClick = () => {
        setEditMode(true)
    }

    return (
        <div style={{margin: '3%'}}>
            {!editMode ? (
                <div onDoubleClick={onDoubleClick} style={{
                    fontSize: '22px'
                }}>
                    <span>{props.status}</span>
                </div>
            ) : (
                <div onBlur={onClickHandler}>
                    <div>
                        <input
                            type="text"
                            value={status}
                            onChange={onChangeHandler}
                            placeholder={props.status}
                            autoFocus/>
                    </div>
                    <div style={{margin: '11px 0 0 15px'}}>
                        <button onClick={onClickHandler} style={{
                            backgroundColor: 'blue',
                            color: 'white',
                            padding: '7px 11px'
                        }}>Save
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
