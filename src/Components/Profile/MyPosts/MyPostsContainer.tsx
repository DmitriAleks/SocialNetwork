import React from 'react';
import {addPostActionCreator, InitialStateType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";

type MapStateToPropsType = {
    profilePage: InitialStateType
}

type MapDispatchToPropsType= {
    addPost:(newPost:string)=>void
}
export type MyPostPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state:AppStateType):MapStateToPropsType=>{
    return{
        profilePage:state.profilePage
}}
let mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType=>{
    return{
        addPost:(newPost)=>{
            dispatch(addPostActionCreator(newPost));
        }
    }}


const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;