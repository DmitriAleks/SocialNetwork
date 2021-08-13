import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {MyPostPropsType} from "./MyPostsContainer";
import  {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import { Textarea } from '../../common/FormControls/FormsControls';


let maxLength10= maxLengthCreator(10)

const MyPosts = (props: MyPostPropsType) => {
    let postElements = props.profilePage.posts.map(post => <Post id={post.id} message={post.message}
                                                                 likesCount={post.likesCount} avatar={post.avatar}/>)


    const addPost = (values:FormDataType) => {
        console.log(values);
        props.addPost(values.newPostText);
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <MyPostsRedux onSubmit={addPost}/>
            <div className={s.post}>
                {postElements}
            </div>
        </div>
    )
}
type FormDataType ={
    newPostText:string
}
const AddNewPostForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newPostText'} placeholder={'add post'}
                       validate={[required,maxLength10]} />
            </div>
            <div>
                <button>add post</button>
            </div>
        </form>
    )
}
const MyPostsRedux = reduxForm<FormDataType>({form:'myPosts'})(AddNewPostForm)

export default MyPosts;