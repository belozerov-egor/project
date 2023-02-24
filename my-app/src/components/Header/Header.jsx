import React from "react";
import s from './Header.module.css'
import Nav from "./Nav/Nav";
import HeaderSearch from "./Search/Search";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img
                src='data:image/png;base64,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'
                alt='logo'/>
            <Nav/>
            <HeaderSearch/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'login'}>
                        Login
                    </NavLink>
                }
            </div>
        </header>
    )
}

export default Header;