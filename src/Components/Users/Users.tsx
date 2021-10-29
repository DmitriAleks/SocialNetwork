import React from 'react';
import {UsersType} from "../../redux/users-reducer";
import Paginator from "../common/Paginator/Paginator";
import User from './User/User';
import style from './Users.module.css'

type UsersPresentType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    followingInProgress: Array<number>,
    users: Array<UsersType>,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    onPageChanged: (pageNumber: number) => void,
}

let Users: React.FC<UsersPresentType> = ({currentPage, totalUsersCount, pageSize, onPageChanged, ...props}) => {
    return <div className={style.content}>
        <div className={style.users}>
            {
                props.users.map(u => <User key={u.id} user={u} followingInProgress={props.followingInProgress}
                                           follow={props.follow}
                                           unfollow={props.unfollow}/>)
            }
        </div>
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} pageSize={pageSize}
                       totalItemCount={totalUsersCount}/>
        </div>
    </div>
}
export default Users