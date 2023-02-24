import React from "react";
import s from "./Post.module.css"


const Post = (props) => {

    return (
        <div className={s.item}>
            <img src="https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg"/>
            {props.message}
            <div>
                <span>like</span> {props.likeNumber}
            </div>
        </div>
    )
}

export default Post;