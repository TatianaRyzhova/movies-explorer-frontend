import React, {useState} from "react";
import {Link} from "react-router-dom";
import AuthInput from "../AuthInput/AuthInput";
import AuthHeader from "../AuthHeader/AuthHeader";

function Register() {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const input = event.target;
    const value = input.value;
    const name = input.name;
    setState({
      ...state,
      [name]: value
    });
    setErrors({...errors, [name]: input.validationMessage});
  }

  const isEnabled = state.name.length > 0 && state.email.length > 0 && state.password.length > 0;

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
            minLength={2}
            maxLength={30}
            placeholder={'Name'}
            errorName={errors.name}
            handleChange={handleChange}
            state={state.name}
          />

          <AuthInput
            label={'E-mail'}
            type={'email'}
            name={'email'}
            id={'email-input'}
            placeholder={'E-mail'}
            errorName={errors.email}
            handleChange={handleChange}
            state={state.email}
          />
          <AuthInput
            label={'Password'}
            type={'password'}
            name={'password'}
            id={'password-input'}
            placeholder={'Password'}
            minLength={8}
            errorName={errors.password}
            handleChange={handleChange}
            state={state.password}
          />

          <Link to="/">
            <button type="submit" aria-label="Save" disabled={!isEnabled}
                    className="registration__save-button">
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
