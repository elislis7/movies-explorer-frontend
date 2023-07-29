import React from 'react';

import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className='footer__container'>
        <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <div className="footer__container-nav">
          <p className="footer__copyright">&copy; 2023</p>
          <nav className="footer__link">
            <a className="footer__link-text" href="https://practicum.yandex.ru/" target="_blank">Яндекс.Практикум</a>
            <a className="footer__link-text" href="https://github.com/elislis7" target="_blank">Github</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;