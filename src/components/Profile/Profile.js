import React, {useContext, useEffect} from "react";
import Header from "../Header/Header";
import {Link} from "react-router-dom";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {useFormWithValidation} from "../../hooks/useForm";

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  const {values, errors, isValid, handleChange, setValues} = useFormWithValidation();

  useEffect(() => {
    setValues(currentUser);
  }, [currentUser, setValues]);

  function handleSubmit(event) {
    event.preventDefault();
    props.onUpdateUser(values);
  }

  const isProfileFormValid = isValid && (values.name !== currentUser.name || values.email !== currentUser.email)

  return (
    <div>

      <Header/>

      <div className="profile">
        <h1 className="profile__greeting">Hello, {currentUser.name}!</h1>

        <form className="profile__form" onSubmit={handleSubmit}>
          <div className="profile__data">
            <label className="profile__label">Name</label>

            <div className="profile__input-container">
              <input type="text" name="name" id="name-input"
                     className="profile__input"
                     value={values.name || ''}
                     onChange={handleChange}
                     minLength="2"
                     maxLength="30"
                     required/>
              <span id='name-input-error' className="input-error profile__input-error">
              {errors.name || ''}
            </span>
            </div>

          </div>


          <div className="profile__data">
            <label className="profile__label">E-mail</label>

            <div className="profile__input-container">
              <input type="email" name="email" id="email-input"
                     className="profile__input"
                     value={values.email || ''}
                     onChange={handleChange}
                     required/>
              <span id='email-input-error' className="input-error profile__input-error">
              {errors.email || ''}
            </span>
            </div>

          </div>

          <div className="profile__footer">
            <button type="submit" aria-label="Save"
                    disabled={!isProfileFormValid}
                    className={`profile__modify-button ${!isProfileFormValid && "profile__modify-button_state_disabled"}`}
            >
              {props.isLoading ? 'Modifying...' : 'Modify'}
            </button>

            <Link to="/" className="profile__logout" onClick={props.handleSignOut}>Sign Out</Link>
          </div>

        </form>


      </div>

    </div>

  )
}

export default Profile;
