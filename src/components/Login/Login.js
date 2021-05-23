import React from "react";
import AuthInput from "../AuthInput/AuthInput";
import AuthHeader from "../AuthHeader/AuthHeader";
import {Link} from "react-router-dom";
import {useFormWithValidation} from "../../hooks/useForm";

function Login({onLogin}) {
  const {values, errors, isValid, handleChange, resetForm} = useFormWithValidation();

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(values.email, values.password);
    resetForm();
  }

  return (
    <div className="login">
      <div className="login__container">
        <AuthHeader
          greetingText={'Nice to see you!'}
        />

        <form name="login" className="login__form" onSubmit={handleSubmit} noValidate>
          <AuthInput
            label={'E-mail'}
            type={'email'}
            name={'email'}
            id={'name-input'}
            placeholder={'E-mail'}
            errorName={errors.email}
            value={values.email}
            handleChange={handleChange}
          />
          <AuthInput
            label={'Password'}
            type={'password'}
            name={'password'}
            id={'password-input'}
            minLength={8}
            placeholder={'Password'}
            errorName={errors.password}
            value={values.password}
            handleChange={handleChange}
          />

            <button type="submit" aria-label="Save"
                    disabled={!isValid}
                    className={`login__save-button ${!isValid && "login__save-button_state_disabled"}`}
            >
              Sign In
            </button>

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
