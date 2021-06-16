import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
type HeaderType = {
    login: string
    isAuth: boolean
}



const Header = (props: HeaderType) => {
    return ( <header className={s.header}>
            <div>
                <img src="https://cs6.pikabu.ru/post_img/2017/09/08/6/150486171013913777.gif"/>
                {props.isAuth ? props.login: <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>

    )
}

export default Header;