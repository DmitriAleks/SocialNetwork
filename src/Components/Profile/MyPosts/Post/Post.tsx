import React from 'react';
import s from "./Post.module.css";
import {PostType} from "../../../../redux/profile-reducer";



const Post = (props: PostType) => {
    return (
                <div className={s.item}>
                    <img src={props.avatar} />
                    {props.message}
                    <div>
                        <span>
                            like  {props.likesCount}
                        </span>
                    </div>
                </div>


    )
}
export default Post;