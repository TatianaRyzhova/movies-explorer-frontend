import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">

        <div>
          <p className="footer__info">Educational project Yandex.Practicum x BeatFilm.</p>
        </div>
        <div className="footer__resources">
          <div className="footer__copyright">© 2021 Tatiana Ryzhova</div>
          <nav>
            <ul className="footer__resources_links">
              <li>
                <a href="https://practicum.yandex.com/" className="footer__resources_link" target="_blank" rel="noreferrer">
                  Practicum by Yandex
                </a>
              </li>
              <li>
                <a href="https://github.com/yandex-praktikum" className="footer__resources_link"
                   target="_blank" rel="noreferrer">
                  Github
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/YPracticum" className="footer__resources_link"
                   target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </li>
            </ul>
          </nav>
        </div>

      </div>

    </footer>
  )
}

export default Footer;
