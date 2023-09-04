import { Link } from 'react-router-dom';

import './Login.css'

import logo from '../../images/logo.svg';

import Preloader from '../Movies/Preloader/Preloader';

import { useFormValidation } from '../../hook/formValidation';
import { PATTERN_EMAIL } from '../../utils/constants';

function Login(props) {

  const { 
    title,
    buttonText,
    text,
    link, 
    linkText, 
    onAuth, 
    isLoading 
  } = props;
  const { values, handleChange, errors, isValid, inputValidities } = useFormValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onAuth(values);
  }

  return (
    <div className='form'>
      <Link className='form__logo' to='/'>
        <img src={logo} alt='Логотип сайта' />
      </Link>
      <h2 className='form__title'>{title}</h2>
      <form className='form__container' onSubmit={handleSubmit} noValidate>
        <div className='form__field'>
          <span className='form__field-span'>E-mail</span>
          <input 
            className={
              inputValidities.email === undefined || inputValidities.email
              ? 'form__input'
              : 'form__input form__input_type_error'
            }
            id='email'
            name='email'
            type='email'
            onChange={handleChange}
            placeholder='pochta@yandex.ru'
            value={values.email || ''}
            pattern={PATTERN_EMAIL}
            required  />
          <span className='error'>{errors.email}</span>
        </div>

        <div className='form__field'>
          <span className='form__field-span'>Пароль</span>
          <input 
            className={
              inputValidities.password === undefined || inputValidities.password
              ? 'form__input'
              : 'form__input form__input_type_error'
            }
            id='password'
            name='password'
            type='password'
            onChange={handleChange}
            placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;'
            value={values.password || ''}
            required />
          <span className='error'>{errors.password}</span>
        </div>
        {
            isLoading
              ? <Preloader />
              : <button 
                className={isValid ? 'form__button-login' : 'form__button-login form__button-login_disabled'} 
                type='submit' 
                disabled={!isValid}
              >
                {buttonText}
              </button>
          }
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

export default Login;