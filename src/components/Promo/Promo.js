import React from "react";
import globeLogo from "../../images/globe-logo.svg";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <div>
          <h1 className="promo__heading">Study project of a student of the Web Development Faculty.</h1>
          <p className="promo__text">Scroll down to find out more about this project and its creator.</p>
          <a href="#about-project">
            <button className="promo__button" type='button' aria-label='promo'>Learn More</button>
          </a>
        </div>
        <div>
          <img src={globeLogo} alt="promo logo" className="promo__logo rotation"/>
        </div>
      </div>

    </section>
  )
}

export default Promo;
