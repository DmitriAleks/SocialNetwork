import React from 'react';
import {connect} from "react-redux";
import {
    InitialStateUsersType,
    setCurrentPage,
    setToggleFollowingProgress,
    getUsersThunkCreator,
    follow, unfollow
} from "../../redux/users-reducer";
import {AppStateType} from '../../redux/redux-store';
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.usersPage.currentPage, this.props.usersPage.pageSize);
    }


    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.usersPage.pageSize);
    }

    render() {
        return <>
            {this.props.usersPage.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.usersPage.totalUsersCount}
                   pageSize={this.props.usersPage.pageSize}
                   currentPage={this.props.usersPage.currentPage}
                   users={this.props.usersPage.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


type MapStateToPropsType = {
    usersPage: InitialStateUsersType
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    followingInProgress: Array<number>
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType


let mapStateToProps = (state: AppStateType) => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,


    }
}
export default connect(mapStateToProps, {
    follow: follow,
    unfollow: unfollow,
    setCurrentPage,
    setToggleFollowingProgress,
    getUsersThunkCreator
})(UsersContainer)