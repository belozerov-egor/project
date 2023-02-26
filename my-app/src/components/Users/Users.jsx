import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/images/index.png";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {toggleFollowingProgress} from "../../redux/users-reducer";
import {followAPI} from "../../api/api";
import Paginator from "./Paginator";
import User from "./User";

let Users = (props) => {
  /*  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= 30; i++) {
        pages.push(i);
    }*/

    return <div>
        {/*  <div>
            {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectPage}
                                 onClick={() => {
                                     props.onPageChanged(p);
                                 }}> {p} </span>
                }
            )}
        </div>*/}
        <Paginator currentPage={props.currentPage}
                   onPageChanged={props.onPageChanged}
                   totalUsersCount={props.totalUsersCount}
                   pageSize={props.pageSize}/>
        {
            props.users.map(u => <User
                user={u}
                followingInProgress = {props.followingInProgress}
                follow = {props.follow}
                unfollow={props.unfollow}
                key={u.id}/> )
        }

        }</div>
}


export default Users


