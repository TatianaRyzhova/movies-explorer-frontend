import React from "react";
import logo from "../../images/logo.svg";
import {Link, Route, Switch} from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header__container">

        <Link to="/">
          <img src={logo} alt="logo" className="header__logo"/>
        </Link>

        <Switch>
          <nav className="header__navigation">
            <Route path="/">
              <Link to="/signup" className="header__signup">Register</Link>
            </Route>

            <Route path="/">
              <Link to="/signin" className="header__signin">
                <button className="header__signin-button" type='button' aria-label='menu'>Sign In</button>
              </Link>
            </Route>
          </nav>
        </Switch>

      </div>

    </header>
  )
}

export default Header;
