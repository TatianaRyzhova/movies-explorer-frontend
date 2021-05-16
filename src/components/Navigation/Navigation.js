import React from "react";
import {NavLink} from 'react-router-dom';
import accountIcon from "../../images/account-icon.svg"

function Navigation() {
  return (
    <nav className="navigation">

      <div className="navigation__not-logged">
        <NavLink to="/signup" className="navigation__signup">Register</NavLink>
        <NavLink to="/signin" className="header__signin">
          <button className="navigation__signin-button" type='button' aria-label='menu'>Sign In</button>
        </NavLink>
      </div>

      <div className="navigation__logged">

        <div className="navigation__movies-container">
          <NavLink to="/movies" className="navigation__movies">Movies</NavLink>
          <NavLink to="/saved-movies" className="navigation__movies">Saved Movies</NavLink>
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

    </nav>
  )
}

export default Navigation;
