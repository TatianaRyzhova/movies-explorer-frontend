import React from "react";
import Header from "../Header/Header";
import {Link} from "react-router-dom";

function Profile() {
  return (
    <div>

      <Header/>

      <div className="profile">
        <h1 className="profile__greeting">Hello, Tatiana!</h1>

        <form className="profile__form">
          <div className="profile__data">
            <label className="profile__label">Name</label>
            <input type="name" name="name" className="profile__input" required/>
          </div>

          <div className="profile__data">
            <label className="profile__label">E-mail</label>
            <input type="email" name="email" className="profile__input" required/>
          </div>
        </form>

        <div className="profile__footer">
          <button type="submit" aria-label="Save" className="profile__modify-button">
            Modify
          </button>
          <Link to="/" className="profile__logout">Sign Out</Link>
        </div>
      </div>

    </div>

  )
}

export default Profile;
