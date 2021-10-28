import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {MyPostPropsType} from "./MyPostsContainer";
import  {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import { Textarea } from '../../common/FormControls/FormsControls';
import style from '../../../assets/styles/ButtonStyle.module.css';


let maxLength10= maxLengthCreator(10)
type FormDataType ={
    newPostText:string
}
const AddNewPostForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div >
                <Field component={Textarea} name={'newPostText'} placeholder={'create post'} className={s.textarea}
                       validate={[required,maxLength10]} />
            </div>
            <div>
                <button className={style.btn}>add post</button>
            </div>
        </form>
    )
}
const MyPostsRedux = reduxForm<FormDataType>({form:'myPosts'})(AddNewPostForm)

 const MyPosts = React.memo((props: MyPostPropsType) => {
    // shouldComponentUpdate(nextProps: Readonly<MyPostPropsType>, nextState: Readonly<{}>, nextContext: any): boolean {
    //     return nextProps != this.props  || nextState !=this.state
    // }//функция которая сравнивает приходящие пропсы, при возвращение фолс не перерисовывает компонету, для классовых компонет
    let postElements = props.profilePage.posts.map(post => <Post key={post.id} id={post.id} message={post.message}
                                                                 likesCount={post.likesCount} avatar={post.avatar}/>)


    const addPost = (values:FormDataType) => {
        props.addPost(values.newPostText);
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.content}>
            <MyPostsRedux onSubmit={addPost}/>
            <div className={s.post}>
                {postElements}
            </div>
            </div>
        </div>
    )
})

export default MyPosts
