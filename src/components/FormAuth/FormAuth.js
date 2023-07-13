// Общий компонент для форм регистрации и авторизации пользователя
import React from 'react';
import { Link } from 'react-router-dom';

import './FormAuth.css';

import logo from '../../images/logo.svg';

function FormAuth(props) {

  const { title, children, buttonText, text, link, linkText } = props;

  return (
    <div className='form'>
      <Link className='form__logo' to='/'>
        <img src={logo} alt='логотип' />
      </Link>
      <h2 className='form__title'>{title}</h2>
      <form className='form__container'>
        {children}
        <button className='form__button' type='submit'>
          {buttonText}
        </button>
      </form>
      <p className='form__text'>
        {text}
        <Link className='form__link' to={link}>
          {linkText}
        </Link>
      </p>
    </div>
  );
}

export default FormAuth;