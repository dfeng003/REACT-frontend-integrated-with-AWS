import React, { useState, useEffect} from 'react'
import './Header.css'
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { NavLink, Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

function Header({ signOut, username }) {

    const mockResponse = {};

    const [isGuide, setIsGuide] = useState(false);
    const history = useHistory();
    //invoke useHistory() to get the history object and then call .push('/...') on that object
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        // check if user is registered as a guide
        async function checkGuideStatus() {
          try {
//            const response = await fetch(`/api/guide/${user.username}/profile`);
//            const data = response.json()
              const data = mockResponse;
              if(Object.keys(data).length != 0){
                setIsGuide(true);
              }
          } catch (error) {
            console.error('Error checking guide status:', error);
          }
        }

        checkGuideStatus();
      }, []);

    //initializes the state variable with an initial value, and provides a function setShowDropdown to update this state variable later
    const handleAvatarClick = () => {
        setShowDropdown(!showDropdown);
      };

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
                {/* pushes a new entry onto the history stack and navigates the user to the route */}
                {!isGuide && (<Button className='header__guideButton' onClick={() => history.push('/become_guide')}>Become a guide</Button>)}
                {isGuide && (<Button className='header__guideButton' onClick={() => history.push('/calendar')}>Manage your calendar</Button>)}

                <LanguageIcon />
                <div>
                    <Avatar style={{ backgroundColor: '#6282a0' }} onClick={handleAvatarClick}>{username.charAt(0)}</Avatar>
                    {showDropdown && (
                        <div className="avatar_dropdown">
                           <Button className="dropdown_item" onClick={() => history.push('/guide_profile')}>Guide Profile</Button>
                           <Button className="dropdown_item" onClick={signOut}>Sign Out</Button>
                        </div>
                     )}
                </div>
            </div>

        </div>
    )
}

export default Header
