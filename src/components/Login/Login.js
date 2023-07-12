import React from 'react';

import './Login.css'

import FormAuth from '../FormAuth/FormAuth';

function Login() {
  return (
    <FormAuth
      title='Рады видеть!'
      buttonText='Войти'
      text='Ещё не зарегистрированы? '
      linkText='Регистрация'
      link='/sign-up'
    >
      <label className='form__field'>
        <span className='form___span'>E-mail</span>
        <input className='form__input'
          id="email"
          name="email"
          type="email"
          placeholder=""
          required  />
        <span class="form__error">Что-то пошло не так...</span>
      </label>

      <label className='form__field'>
        <span className='form___span'>Пароль</span>
        <input className='form__input' 
          id="password"
          name="password"
          type="password"
          required />
        <span class="form__error">Что-то пошло не так...</span> 
      </label>
    </FormAuth>
  );
}

export default Login;