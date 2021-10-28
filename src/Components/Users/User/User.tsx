import React from 'react';
import s from '../Users.module.css';
import userPhoto from '../../../assets/images/user.png';
import {NavLink} from "react-router-dom";
import {UsersType} from "../../../redux/users-reducer";
import style from './../../../assets/styles/ButtonStyle.module.css'

type UserPresentType = {
    followingInProgress: Array<number>,
    user: UsersType,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
}

let User: React.FC<UserPresentType> = ({user, followingInProgress, unfollow, follow}) => {
    return <div className={s.user}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                 className={s.userPhoto}/>
                        </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button className={style.btn}
                                          disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              unfollow(user.id)
                                          }}>Unfollow
                                </button>
                                : <button className={style.btn}
                                          disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              follow(user.id)
                                          }}>Follow
                                </button>}
                        </div>
                    </span>
        <span className={s.local}>
                      <span><div>{user.name}</div><div>{user.status}</div></span>
                      <span >
                          <div>{"u.location.city"}</div>
                          <div>{"u.location.country"}</div>
                      </span>
                    </span>

    </div>
}
export default User