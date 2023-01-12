import './Style.css'
import { NavLink } from 'react-router-dom';
import React from 'react'

export const NavBar = () => {
    return (
        <div class="topnav">
            <div className="contents">
            <NavLink className={({ isActive }) => (isActive ? 'link-active' : 'link')} to='/'>
            Home
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'link-active' : 'link')} to='/register' activeStyle>
            Register
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'link-active' : 'link')} to='/users' activeStyle>
            Users
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'link-active' : 'link')} to='/batches' activeStyle>
            Batches
            </NavLink>

            </div>

        </div>
    )
}

export default NavBar