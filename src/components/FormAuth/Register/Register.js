import React from 'react';

import './Register.css'

import FormAuth from '../FormAuth';

function Register() {

  return (
    <FormAuth
      title='Добро пожаловать!'
      buttonText='Зарегистрироваться'
      text='Уже зарегистрированы? '
      linkText='Войти'
      link='/sign-in'
    >
      <div className='form__field'>
        <span className='form___span'>Имя</span>
        <input className='form__input'
          id="name"
          name="name"
          type="text"
          placeholder=""
          required />
        <span className="error">Что-то пошло не так...</span> 
      </div>

      <div className='form__field'>
        <span className='form___span'>E-mail</span>
        <input className='form__input'
          id="email"
          name="email"
          type="email"
          placeholder=""
          required />
        <span className="error">Что-то пошло не так...</span>
      </div>

      <label className='form__field'>
        <span className='form___span'>Пароль</span>
        <input className='form__input'
          id="password"
          name="password"
          type="password"
          required />
        <span className="error">Что-то пошло не так...</span> 
      </label>
    </FormAuth>
  );
}

export default Register;