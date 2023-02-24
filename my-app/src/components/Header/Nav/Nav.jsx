import React from "react";
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={s.nav}>


            <div className={s.item}>
                <NavLink to="/news" className={({isActive}) => isActive ? 'activeLink' : ''}>FEED</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to="/dialogs" className={({isActive}) => isActive ? 'activeLink' : ''}>DIALOGS</NavLink>
            </div>

            <div className={s.item}>
                FRIENDS
            </div>

            <div className={s.item}>
                <NavLink to="/profile" className={({isActive}) => isActive ? 'activeLink' : ''}>PROFILE</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to="/users" className={({isActive}) => isActive ? 'activeLink' : ''}>USERS</NavLink>
            </div>
        </nav>
    );
}

export default Nav