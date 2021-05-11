import React from "react";
import personalPhoto from "../../images/personal-photo.png";
import linkIcon from "../../images/link-icon.svg";

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__container">

        <h2 className="about-me__section-heading">Student</h2>
        <div className="about-me__description">
          <div>
            <h3 className="about-me__heading">Tatiana</h3>
            <h4 className="about-me__speciality">Frontend Engineer</h4>
            <p className="about-me__text">I was born and live in Saratov, graduated from the Faculty of Economics at SSU.
              I have a wife
              and daughter. I love listening to music, and I'm also fond of running. Recently started coding. Since 2015,
              he worked at SKB Kontur. After completing a course in web development, I started doing freelance orders and
              left my permanent job.
            </p>
          </div>

          <div>
            <img src={personalPhoto} alt="avatar" className="about-me__personal-photo"/>
          </div>
        </div>

        <nav>
          <ul className="about-me__social-networks">
            <li>
              <a href="https://www.facebook.com/" className="about-me__social-network" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://github.com/TatianaRyzhova" className="about-me__social-network" target="_blank" rel="noreferrer">
                Github
              </a>
            </li>
          </ul>
        </nav>

        <div className="about-me__portfolio">
          <h5 className="about-me__portfolio_heading">Portfolio</h5>
          <nav>
            <ul className="about-me__portfolio-links">
              <li>
                <a href="#" className="about-me__portfolio-link" target="_blank" rel="noreferrer">
                  Static website
                  <img src={linkIcon} alt="link icon" className="about-me__portfolio-link-icon"/>
                </a>
              </li>
              <li>
                <a href="https://tatianaryzhova.github.io/russian-travel/" className="about-me__portfolio-link" target="_blank" rel="noreferrer">
                  Responsive website
                  <img src={linkIcon} alt="link icon" className="about-me__portfolio-link-icon"/>
                </a>
              </li>
              <li>
                <a href="http://mesto.tatiana.nomoredomains.club/" className="about-me__portfolio-link" target="_blank" rel="noreferrer">
                  Single page application
                  <img src={linkIcon} alt="link icon" className="about-me__portfolio-link-icon"/>
                </a>
              </li>
            </ul>
          </nav>
        </div>

      </div>

    </section>
  )
}

export default AboutMe;
