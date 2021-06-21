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
        // this.props.setToggleIsFetching(true);
        // getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize).then(data => {
        //
        //         this.props.setToggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //         this.props.setTotalUserCount(data.totalCount)
        //     });
    }


    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.usersPage.pageSize);
        // this.props.setToggleIsFetching(true)
        // this.props.setCurrentPage(pageNumber)
        // getUsers(pageNumber, this.props.usersPage.pageSize).then(data => {
        //         this.props.setToggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //     });
    }

    render() {
        return<>
            {this.props.usersPage.isFetching ? <Preloader/>  : null}
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
    getUsersThunkCreator: any
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType


let mapStateToProps = (state: AppStateType) => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,


    }
}
// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: Array<UsersType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUserCount: (totalCount) => {
//             dispatch(setTotalUserCountAC(totalCount))
//         },
//         setToggleIsFetching: (getFetching) => {
//             dispatch(setToggleIsFetchingAC(getFetching))
//         },
//
//     }
// }

export default connect(mapStateToProps, {
    follow: follow,
    unfollow: unfollow ,

    setCurrentPage,
    setToggleFollowingProgress,
    getUsersThunkCreator

} )(UsersContainer)