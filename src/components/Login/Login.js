import React from "react";
import AuthInput from "../AuthInput/AuthInput";
import AuthHeader from "../AuthHeader/AuthHeader";
import {Link} from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <AuthHeader
          greetingText={'Nice to see you!'}
        />

        <form name="login" className="login__form">
          <AuthInput
            label={'E-mail'}
            type={'email'}
            name={'email'}
            placeholder={'E-mail'}
          />
          <AuthInput
            label={'Password'}
            type={'password'}
            name={'password'}
            placeholder={'Password'}
          />

          <Link to="/">
            <button type="submit" aria-label="Save"
                    className="login__save-button login__save-button_sign-in">
              Sign In
            </button>
          </Link>

        </form>

        <div className="login__signup">
          <p className="login__signup-text">Not registered?</p>
          <Link to="/signup" className="login__signup-link">Register</Link>
        </div>

      </div>
    </div>
  )
}

export default Login;
