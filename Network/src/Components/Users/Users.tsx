import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {followUsers, unfollowUsers} from "../../api/api";

type UsersPresentType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    users: Array<UsersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
}

let Users = (props: UsersPresentType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : ''}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}

        </div>

        {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                 className={s.userPhoto}/>
                        </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    unfollowUsers(u.id).then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id);
                                            }
                                        });

                                }}>Unfollow</button>

                                : <button onClick={() => {
                                    followUsers(u.id).then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id);
                                            }
                                        });

                                }}>Follow</button> }
                        </div>


                    </span>
                <span>
                      <span><div>{u.name}</div><div>{u.status}</div></span>
                      <span>
                          <div>{"u.location.city"}</div>
                          <div>{"u.location.country"}</div>
                      </span>
                    </span>
            </div>)
        }
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : ''}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}

        </div>

    </div>
}
export default Users