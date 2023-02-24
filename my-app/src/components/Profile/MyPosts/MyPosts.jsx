import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {useForm} from "react-hook-form";


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likeNumber={p.likeNumber}/>);
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    const {register, handleSubmit} = useForm();
    return (
        <div>
            <div className={s.myPost}>
                <div className={s.newPostBlock}>
                    <div className={s.postHead}>New Post</div>
                    <div className={s.postFormBlock}>
                        <form onSubmit={handleSubmit(onAddPost)}>
                        <textarea {...(register("newPostText"), {required: true})}

                                  placeholder={"new post"}

                        ></textarea>
                        <div>
                            <button>
                                Submit
                            </button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;