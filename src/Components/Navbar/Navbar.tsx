import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { InitialStateUserType } from '../../redux/auth-reducer';
import { AppStateType } from '../../redux/redux-store';
import s from './Navbar.module.css';



const Navbar = () => {
    const {id,isAuth} = useSelector<AppStateType,InitialStateUserType>((state)=>state.auth)
    return (
        <nav className={s.nav}>
            {isAuth &&
                <div>
                    <div className={s.item}>
                        <NavLink to={'/profile/'+id} activeClassName={s.active}> Profile</NavLink>
                    </div>
                    <div className={`${s.item} ${s.active}`}>
                        <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to='/news' activeClassName={s.active}>News</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
                    </div>
                </div>
            }

        </nav>
    )
}


export default Navbar;