import React from 'react'
import './Header.css'
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { NavLink, Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Header({ signOut }) {
    const history = useHistory();
    //invoke useHistory() to get the history object and then call .push('/...') on that object

    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className="header__icon"
                    src="./logo.PNG"
                    alt=""
                  />
            </Link>

            <div className="header__tabs">
                <NavLink exact to='/' activeClassName="active" className="header__link">Find a guide</NavLink>
                <span className="header__spacer"></span> {/* Spacer */}
                <NavLink to='/blog' activeClassName="active" className="header__link">Blog</NavLink>
            </div>

            <div className='header__right'>
                <button className='header__guideButton' onClick={() => history.push('/become_guide')}>Become a guide</button>
                {/* pushes a new entry onto the history stack and navigates the user to the route */}
                <LanguageIcon />
                {signOut && <Avatar onClick={signOut} />} {/* Render Avatar with signOut prop */}
            </div>

        </div>
    )
}

export default Header
