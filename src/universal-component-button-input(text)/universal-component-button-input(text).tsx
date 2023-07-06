import React, {ChangeEvent} from "react";

export type ButtonUnuversalPropsType = {
    title: string
    onClick: () => void
    onChange: (e: string) => void
    value: string
}

export const ButtonUniversal = (props: ButtonUnuversalPropsType) => {
    const {
        title,
        onClick,
        onChange,
        value
    } = props;

    const onClickHandler = () => {
        onClick()
    }
    const onChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.value)
    }

    return (
        <div>
            <input value={value} onChange={onChangeEventHandler}/>
            <button onClick={onClickHandler}>{title}</button>
        </div>
    )
}