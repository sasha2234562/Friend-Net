import React, {useMemo, useState} from "react";
import u from "../../users/users.module.css";

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
    const portionSize: number = 6
    const portionCount = Math.ceil(pageCount / portionSize)
    const [portionNumber, setPortionNumber] = useState<number>(1)
    const leftPortionNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionNumber = (portionNumber * portionSize) + 1
    return (
        <div className={u.numberPage}>
            {portionNumber > 1 &&
                <button onClick={() => {
                    setPortionNumber((portionNumber - 1))
                }}>PREV</button>}
            {pages.filter(p=> p >= leftPortionNumber && p <= rightPortionNumber).map((item, index) => {
                return <span
                    className={props.currentPage === item ? u.active : ''}
                    key={index}
                    onClick={() => props.onPageChanged(item, props.pageSize)}>
                            {item}
                        </span>
            })}
            {portionNumber < portionCount &&
                <button onClick={() => {
                    setPortionNumber((portionNumber + 1))
                }}>NEXT</button>}
        </div>
    )
}