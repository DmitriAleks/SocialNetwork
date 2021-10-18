import React from 'react';
import s from '../Users.module.css';
import userPhoto from '../../../assets/images/user.png';
import {NavLink} from "react-router-dom";
import {UsersType} from "../../../redux/users-reducer";

type UserPresentType = {
    followingInProgress: Array<number>,
    user: UsersType,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
}

let User: React.FC<UserPresentType> = ({user,followingInProgress,unfollow,follow}) => {
    return <div>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                 className={s.userPhoto}/>
                        </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                    unfollow(user.id)
                                }}>Unfollow</button>

                                : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                    follow(user.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                <span>
                      <span><div>{user.name}</div><div>{user.status}</div></span>
                      <span>
                          <div>{"u.location.city"}</div>
                          <div>{"u.location.country"}</div>
                      </span>
                    </span>

    </div>
}
export default User