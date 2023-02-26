import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/images/index.png";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {toggleFollowingProgress} from "../../redux/users-reducer";
import {followAPI} from "../../api/api";
import Paginator from "./Paginator";

let User = ({user,followingInProgress,unfollow,follow} ) => {
    return (
        <div>
                <span>
                    <div className={s.profileLink}>
                        <NavLink to={"../profile/" + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.userPhoto}/>
                            </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                /*props.toggleFollowingProgress(true, user.id);*/
                                unfollow(user.id);
                            }}>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                follow(user.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status} </div>
                    </span>
                    <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </span>
                </span>
            </div>

    )
}


export default User


