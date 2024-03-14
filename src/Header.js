import React from 'react'
import './Header.css'
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { NavLink, Link } from "react-router-dom";

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className="header__icon"
                    src="/images/logo.png"
                    alt=""
                  />
            </Link>

            <div className="header__tabs">
                <NavLink exact to='/' activeClassName="active" className="header__link">Find a guide</NavLink>
                <span className="header__spacer"></span> {/* Spacer */}
                <NavLink to='/blog' activeClassName="active" className="header__link">Blog</NavLink>
            </div>

            <div className='header__right'>
                <p>Become a guide</p>
                <LanguageIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
