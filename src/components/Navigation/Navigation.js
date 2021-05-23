import React, {useState} from "react";
import {NavLink} from 'react-router-dom';
import accountIcon from "../../images/account-icon.svg"

function Navigation(props) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  return (

    <nav className={`navigation
         ${isMenuOpen ? "navigation_menu-open" : ""}`}
    >
      {/*<div className="navigation__not-logged">*/}
      <div className={`navigation__not-logged ${props.loggedIn ? '' : "navigation__not-logged_visible"}`}>
        <NavLink to="/signup" className="navigation__signup">Register</NavLink>
        <NavLink to="/signin" className="header__signin">
          <button className="navigation__signin-button" type='button' aria-label='menu'>Sign In</button>
        </NavLink>
      </div>

      <button
        className="navigation__burger"
        type='button'
        aria-label='burger menu'
        onClick={toggleMenu}
      ></button>

      <div className="navigation__wrapper">

        <div className={`navigation__logged ${props.loggedIn ?
          `navigation__logged_visible ${isMenuOpen ? "navigation__logged_mobile navigation__overlay" : ""}`
          : ''}`}
        >

          <div className="navigation__movies-container">
            <NavLink to="/" className="navigation__main-page">Home Page</NavLink>
            <NavLink to="/movies" className="navigation__movies" activeStyle={{fontWeight: "bold"}}>Movies</NavLink>
            <NavLink to="/saved-movies" className="navigation__movies" activeStyle={{fontWeight: "bold"}}>Saved
              Movies</NavLink>
          </div>

          <div>
            <NavLink to="/profile" className="">
              <button className="navigation__profile-button" type='button' aria-label='menu'>
                <img src={accountIcon} alt="account icon" className="navigation__profile-icon"/>
                Account
              </button>
            </NavLink>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navigation;
