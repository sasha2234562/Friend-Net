import React, {ChangeEvent} from "react";

export type ButtonUniversalPropsType = {
    title: string
    onClick: () => void
    onChange: (e: string) => void
    value: string
    placeholderValue: string
}

export const ButtonUniversal = (props: ButtonUniversalPropsType) => {
    const {
        title,
        onClick,
        onChange,
        value,
        placeholderValue
    } = props;

    const onClickHandler = () => {
        onClick()
    }
    const onChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.value)
    }

    return (
        <div>
            <input placeholder={placeholderValue} value={value} onChange={onChangeEventHandler}/>
            <button onClick={onClickHandler}>{title}</button>
        </div>
    )
}