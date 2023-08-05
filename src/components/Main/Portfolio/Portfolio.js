import React from 'react';

import arrow from '../../../images/arrow.svg'

import './Portfolio.css'

function Portfolio() {
  return (
    <div className='portfolio'>
      <p className='portfolio__title'>Портфолио</p>
      <a
        className='portfolio__link' 
        href='https://elislis7.github.io/how-to-learn/' 
        target='_blank'>
        <p className='portfolio__text'>Статичный сайт</p>
        <img className='portfolio__image' src={arrow} alt='Стрелка навигации' />
      </a>
      <a
        className='portfolio__link' 
        href='https://elislis7.github.io/russian-travel/'
        target='_blank'>
        <p className='portfolio__text'>Адаптивный сайт</p>
        <img className='portfolio__image' src={arrow} alt='Стрелка навигации' />
      </a>
      <a
        className='portfolio__link' 
        href='https://elislis.nomoredomains.rocks/' 
        target='_blank'>
        <p className='portfolio__text'>Одностраничное приложение</p>
        <img className='portfolio__image' src={arrow} alt='Стрелка навигации' />
      </a>
    </div>
  );
}

export default Portfolio;