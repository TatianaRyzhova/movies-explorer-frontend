import React from "react";
import {Link, Route, Switch} from 'react-router-dom';
import accountIcon from "../../images/account-icon.svg"

function Navigation() {
  return (

    <Switch>
      <nav className="navigation">

        <div className="navigation__not-logged">
          <Route path="/">
            <Link to="/signup" className="navigation__signup">Register</Link>
          </Route>

          <Route path="/">
            <Link to="/signin" className="header__signin">
              <button className="navigation__signin-button" type='button' aria-label='menu'>Sign In</button>
            </Link>
          </Route>
        </div>

        <div className="navigation__logged">
          <div className="navigation__movies-container">
            <Route path="/">
              <Link to="/movies" className="navigation__movies">Movies</Link>
            </Route>
            <Route path="/">
              <Link to="/saved-movies" className="navigation__movies">Saved Movies</Link>
            </Route>
          </div>
          <div>
            <Route path="/">
              <Link to="/profile" className="">
                <button className="navigation__profile-button" type='button' aria-label='menu'>
                  <img src={accountIcon} alt="account icon" className="navigation__profile-icon"/>
                  Account
                </button>
              </Link>
            </Route>
          </div>
        </div>

      </nav>
    </Switch>

  )
}

export default Navigation;
