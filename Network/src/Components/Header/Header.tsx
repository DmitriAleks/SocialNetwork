import React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../../redux/auth-reducer';
import s from './Header.module.css';
type HeaderType = {
    login: string|null
    isAuth: boolean
    logout:() => void
}



const Header = (props: HeaderType) => {
    debugger
    return ( <header className={s.header}>
            <div>
                <img src="https://cs6.pikabu.ru/post_img/2017/09/08/6/150486171013913777.gif"/>
                {props.isAuth
                    ? <button onClick={props.logout}>{props.login} Покинуть профиль</button>
                    : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>

    )
}

export default Header;