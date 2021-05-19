import React from "react";
import logo from "../../images/logo.svg";
import {Link} from 'react-router-dom';

function AuthHeader(props) {
  return (
    <div className="auth-header">
      <Link to="/">
        <img src={logo} alt="logo" className="auth-header__logo"/>
      </Link>
      <h1 className="auth-header__greeting">{props.greetingText}</h1>
    </div>
  )
}

export default AuthHeader;
