import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Header.module.css';

type HeaderType = {
    login: string | null
    isAuth: boolean
    logout: () => void
}


const Header = (props: HeaderType) => {
    return (<header className={style.header}>
            <div className={style.contentHeader}>
                <span className={style.title}> Social Network</span>
                <div className={style.menuLogin}>
                    {props.isAuth
                        ? <button onClick={props.logout}>{props.login} Log out </button>
                        : <button> <NavLink to={'/login'}>Login</NavLink></button>}
                </div>
            </div>
        </header>
    )
}

export default Header;