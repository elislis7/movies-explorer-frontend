import React from 'react';

import avatar from '../../../images/1280-1280.jpg';

import './AboutMe.css'

function AboutMe() {
  return (
    <section className="student" id='student'>
      <h2 className="student__title">Студент</h2>
      <div className="student__description">
        <div className='student__info'>
          <h3 className="student__name">Елизавета</h3>
          <h4 className="student__about">Студент Я.Практикума, 26 лет</h4>
          <p className="student__info-description">
            Я родилась в России, но живу в Турции. У меня есть два пса. Породы: Далматин и Сиба-ину. Я люблю читать мангу. Недавно начала кодить.
          </p>
          <a className="student__link" href="https://github.com/elislis7" target='_blank'>Github</a>
        </div>
          <img className="student__avatar" src={avatar} alt="Фото студента" />
      </div>
    </section>
  );
}

export default AboutMe;