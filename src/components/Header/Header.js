import React from "react";
import logo from "../../images/logo.svg";
import {Link} from 'react-router-dom';
import Navigation from "../Navigation/Navigation";

function Header({loggedIn}) {

  const pathname = window.location.pathname;

  return (
    <header className={`${pathname === '/' ? "header__main-page" : "header"}`}>

      <div className="header__container">

        <Link to="/">
          <img src={logo} alt="logo" className="header__logo"/>
        </Link>

        <Navigation loggedIn={loggedIn}/>

      </div>

    </header>
  )
}

export default Header;
