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
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from '../../redux/users-selecotrs';

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        const {currentPage,pageSize} = this.props.usersPage
        this.props.getUsersThunkCreator(currentPage, pageSize);
    }


    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props.usersPage
        this.props.getUsersThunkCreator(pageNumber,pageSize);
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
    //usersPage: (state :AppStateType)=> {}
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
        usersPage: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default connect(mapStateToProps, {
    follow: follow,
    unfollow: unfollow,
    setCurrentPage,
    setToggleFollowingProgress,
    getUsersThunkCreator
})(UsersContainer)