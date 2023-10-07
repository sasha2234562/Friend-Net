import React, {useMemo} from "react";
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
    return (
        <div className={u.numberPage}>
            {pages.map((item, index) => {
                return <span
                    className={props.currentPage === item ? u.active : ''}
                    key={index}
                    onClick={() => props.onPageChanged(item, props.pageSize)}>
                            {item}
                        </span>
            })}
        </div>
    )
}