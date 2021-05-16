import React from "react";
import logo from "../../images/logo.svg";
import {Link} from 'react-router-dom';
import Navigation from "../Navigation/Navigation";

function Header() {

  const pathname = window.location.pathname;

  return (
    <header className={`${pathname === '/' ? "header__main-page" : "header"}`}>

      <div className="header__container">

        <Link to="/">
          <img src={logo} alt="logo" className="header__logo"/>
        </Link>

        <Navigation/>

      </div>

    </header>
  )
}

export default Header;
