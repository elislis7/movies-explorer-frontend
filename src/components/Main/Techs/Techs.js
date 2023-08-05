import React from 'react';

import './Techs.css'

function Techs() {
  return (
    <section className='techs' id='techs'>
      <div className='techs__container'>
        <h2 className='techs__title'>Технологии</h2>
        <div className='techs__description'>
          <h3 className='techs__description-subtitle'>7 технологий</h3>
          <p className='techs__description-text'>
            На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
          </p>
        </div>
        <ul className='techs__list'>
          <li className='techs__sublist'>HTML</li>
          <li className='techs__sublist'>CSS</li>
          <li className='techs__sublist'>JS</li>
          <li className='techs__sublist'>React</li>
          <li className='techs__sublist'>Git</li>
          <li className='techs__sublist'>Express.js</li>
          <li className='techs__sublist'>mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;