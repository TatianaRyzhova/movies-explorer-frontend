import React from "react";
import {Link, Route, Switch} from 'react-router-dom';

function Navigation() {
  return (

    <Switch>
      <nav className="navigation">

        <Route path="/">
          <Link to="/signup" className="navigation__signup">Register</Link>
        </Route>

        <Route path="/">
          <Link to="/signin" className="header__signin">
            <button className="navigation__signin-button" type='button' aria-label='menu'>Sign In</button>
          </Link>
        </Route>

      </nav>
    </Switch>

  )
}

export default Navigation;
