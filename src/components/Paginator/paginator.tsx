import React, {useMemo, useState} from "react";
import p from "./paginator.module.css";

type PropsPaginatorType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number, pageSize: number) => void
}
export const Paginator = (props: PropsPaginatorType) => {
    let pageCount = useMemo(() => {
        return Math.ceil(props.totalUsersCount / props.pageSize)
    }, [props.totalUsersCount, props.pageSize]);

    const pages: number[] = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    const portionSize: number = 7
    const portionCount = Math.ceil(pageCount / portionSize)
    const [portionNumber, setPortionNumber] = useState<number>(1)
    const leftPortionNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionNumber = (portionNumber * portionSize)

    return (
        <div className={p.numberPages}>
            {portionNumber > 1 &&
                <button onClick={() => {
                    setPortionNumber((portionNumber - 1))
                }} className={p.next}>&#8656; PREV</button>}
            {pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber).map((item, index) => {
                return <span
                    className={props.currentPage === item ? p.active : ''}
                    key={index}
                    onClick={() => props.onPageChanged(item, props.pageSize)}>
                            {item}
                        </span>
            })}
            {portionNumber < portionCount &&
                <button onClick={() => {
                    setPortionNumber((portionNumber + 1))
                }} className={p.prev}>NEXT &#8658;</button>}
        </div>
    )
}