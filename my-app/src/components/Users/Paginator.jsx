import React from "react";
import s from "./users.module.css";

let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= 30; i++) {
        pages.push(i);
    }

    return (
    <div>
        <div>
            {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectPage}
                                 onClick={() => {
                                     props.onPageChanged(p);
                                 }}> {p} </span>
                }
            )}
        </div>
    </div>
        )
}



export default Paginator


