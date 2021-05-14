import React from "react";
import {Link} from "react-router-dom";
import AuthInput from "../AuthInput/AuthInput";
import AuthHeader from "../AuthHeader/AuthHeader";
import InputError from "../InputError/InputError";

function Register() {
  return (
    <div className="registration">
      <div className="registration__container">
        <AuthHeader
          greetingText={'Welcome!'}
        />

        <form name="registration" className="registration__form" >
          <AuthInput
            label={'Name'}
            type={'name'}
            name={'name'}
            id={'name-input'}
            placeholder={'Name'}
          />

          {/*<InputError name={'name'}/>*/}


          <AuthInput
            label={'E-mail'}
            type={'email'}
            name={'email'}
            id={'email-input'}
            placeholder={'E-mail'}
          />
          <AuthInput
            label={'Password'}
            type={'password'}
            name={'password'}
            id={'password-input'}
            placeholder={'Password'}
          />

          <Link to="/">
            <button type="submit" aria-label="Save"
                    className="registration__save-button registration__save-button_sign-up">
              Register
            </button>
          </Link>

        </form>

        <div className="registration__signin">
          <p className="registration__signin-text">Already registered?</p>
          <Link to="/signin" className="registration__signin-link">Sign In</Link>
        </div>

      </div>
    </div>
  )
}

export default Register;
