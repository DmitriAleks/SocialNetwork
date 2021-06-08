import React from 'react';
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC,InitialStateUsersType, UsersType} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import { AppStateType } from '../../redux/redux-store';
import Users from "./UsersС";

type MapStateToPropsType = {
    usersPage: InitialStateUsersType
}
type MapDispatchToPropsType = {
    follow: (userId:number) => void
    unfollow: (userId:number) => void
    setUsers: (users:Array<UsersType>) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType


let mapStateToProps = (state:AppStateType) =>{
    return {
        usersPage: state.usersPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        follow:(userId:number)=> {
            dispatch(followAC(userId))
        },
        unfollow:(userId:number)=> {
            dispatch(unfollowAC(userId))
        },
        setUsers:(users:Array<UsersType>)=> {
            dispatch(setUsersAC(users))
        }

    }
}
const UsersContainer = connect(mapStateToProps,mapDispatchToProps )(Users)
export default UsersContainer;