import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {MyPostPropsType} from "./MyPostsContainer";




const MyPosts = (props: MyPostPropsType) => {
    let postElements = props.profilePage.posts.map(post => <Post id={post.id} message={post.message}
                                                                 likesCount={post.likesCount} avatar={post.avatar}/>)
    const onAddPost = () => {
      props.addPost();
    }

    const onPostChange=(e: ChangeEvent<HTMLTextAreaElement>)=>{
        let newText = e.currentTarget.value
        props.updateNewPostText(newText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>add post</button>
                </div>
            </div>
            <div className={s.post}>
                {postElements}
            </div>
        </div>
    )
}
export default MyPosts;