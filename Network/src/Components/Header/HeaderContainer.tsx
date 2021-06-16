import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
const Header = () => {
    return ( <header className={s.header}>
            <img src="https://cs6.pikabu.ru/post_img/2017/09/08/6/150486171013913777.gif"/>
            <div className={s.loginBlock}>
                <NavLink to={'/login'}>Login</NavLink>
            </div>
        </header>

    )
}

export default Header;