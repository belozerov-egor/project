import React from 'react';
import s from './Post.module.css';
import {PostType} from "../../../../redux/state";

const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img src='https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' />
            { props.message }
            <div>
                <span>like</span> { props.likesCount }
            </div>
        </div>
    )
}

export default Post;