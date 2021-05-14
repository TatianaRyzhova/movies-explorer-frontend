import React, {useState} from "react";
import AuthInput from "../AuthInput/AuthInput";
import AuthHeader from "../AuthHeader/AuthHeader";
import {Link} from "react-router-dom";

function Login() {
  const [state, setState] = useState({
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

  const isEnabled = state.email.length > 0 && state.password.length > 0;

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
            id={'name-input'}
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
            minLength={8}
            placeholder={'Password'}
            errorName={errors.password}
            handleChange={handleChange}
            state={state.password}
          />

          <Link to="/">
            <button type="submit" aria-label="Save"
                    disabled={!isEnabled}
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
