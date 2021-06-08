import React from 'react';
import {addPostActionCreator, InitialStateType, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";

type MapStateToPropsType = {
    profilePage: InitialStateType
}

type MapDispatchToPropsType= {
    updateNewPostText:(newText:string)=>void
    addPost:()=>void
}
export type MyPostPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state:AppStateType):MapStateToPropsType=>{
    return{
        profilePage:state.profilePage
}}
let mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType=>{
    return{
        updateNewPostText:(newText:string)=> {
        let action = updateNewPostTextActionCreator(newText)
        dispatch(action)
    },
        addPost:()=>{
            dispatch(addPostActionCreator());
            dispatch(updateNewPostTextActionCreator(''));
        }
    }}


const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;