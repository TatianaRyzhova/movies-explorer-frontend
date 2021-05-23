import React from "react";
import {Link} from "react-router-dom";
import AuthInput from "../AuthInput/AuthInput";
import AuthHeader from "../AuthHeader/AuthHeader";
import {useFormWithValidation} from "../../hooks/useForm";

function Register({onRegister}) {
  const {values, errors, isValid, handleChange, resetForm} = useFormWithValidation();

  const handleSubmit = (event) => {
    event.preventDefault();
    onRegister(values.name, values.email, values.password);
    resetForm();
  }

  return (
    <div className="registration">
      <div className="registration__container">
        <AuthHeader
          greetingText={'Welcome!'}
        />

        <form name="registration" className="registration__form" onSubmit={handleSubmit} noValidate>
          <AuthInput
            label={'Name'}
            type={'text'}
            name={'name'}
            id={'name-input'}
            minLength={2}
            maxLength={30}
            placeholder={'Name'}
            errorName={errors.name}
            value={values.name}
            handleChange={handleChange}
          />

          <AuthInput
            label={'E-mail'}
            type={'email'}
            name={'email'}
            id={'email-input'}
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
            placeholder={'Password'}
            minLength={8}
            errorName={errors.password}
            value={values.password}
            handleChange={handleChange}
          />

          <button type="submit" aria-label="Save" disabled={!isValid}
                  className={`registration__save-button ${!isValid && "registration__save-button_state_disabled"}`}
          >
            Register
          </button>

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
