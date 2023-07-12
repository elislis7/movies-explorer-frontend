import React from 'react';

import './Register.css'

import FormAuth from '../FormAuth/FormAuth';

function Register() {

  return (
    <FormAuth
      title='Добро пожаловать!'
      buttonText='Зарегистрироваться'
      text='Уже зарегистрированы? '
      linkText='Войти'
      link='/sign-in'
    >
      <label className='form__field'>
        <span className='form___span'>Имя</span>
        <input className='form__input' 
          id="name" 
          name="name" 
          type="text" 
          placeholder="" 
          required />
        <span class="form__error">Что-то пошло не так...</span> 
      </label>

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

export default Register;