import React from 'react';

import './Login.css'

import FormAuth from '../FormAuth';

function Login() {
  return (
    <FormAuth
      title='Рады видеть!'
      buttonText='Войти'
      text='Ещё не зарегистрированы? '
      linkText='Регистрация'
      link='/sign-up'
    >
      <div className='form__field'>
        <span className='form___span'>E-mail</span>
        <input className='form__input'
          id="email"
          name="email"
          type="email"
          placeholder=""
          required  />
        <span className="error">Что-то пошло не так...</span> {/* form__error */}
      </div>

      <div className='form__field'>
        <span className='form___span'>Пароль</span>
        <input className='form__input' 
          id="password"
          name="password"
          type="password"
          required />
        <span className="error">Что-то пошло не так...</span> {/* form__error */}
      </div>
    </FormAuth>
  );
}

export default Login;