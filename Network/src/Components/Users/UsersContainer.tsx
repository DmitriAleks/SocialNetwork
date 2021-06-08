import React from 'react';
import {connect} from "react-redux";
import {
    followAC,
    setUsersAC,
    unfollowAC,
    InitialStateUsersType,
    UsersType,
    setCurrentPageAC, setTotalUserCountAC
} from "../../redux/users-reducer";
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
    setCurrentPage:(pageNumber:number) => void
    setTotalUserCount:(totalCount:number)=> void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType


let mapStateToProps = (state:AppStateType) =>{
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage

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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUserCount: (totalCount) => {
            dispatch(setTotalUserCountAC(totalCount))
        },

    }
}
const UsersContainer = connect(mapStateToProps,mapDispatchToProps )(Users)
export default UsersContainer;