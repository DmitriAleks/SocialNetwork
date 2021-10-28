import React from 'react';
import s from "./Post.module.css";
import {PostType} from "../../../../redux/profile-reducer";
import like from './../../../../assets/images/like.png'


const Post = (props: PostType) => {
    return (
                <div className={s.item}>
                    <div className={s.message}>
                    <img src={props.avatar} />
                    {props.message}
                    </div>
                    <div className={s.likes}>
                          <span >
                        {props.likesCount}
                           </span>
                            <img src={like}/>
                    </div>
                </div>


    )
}
export default Post;