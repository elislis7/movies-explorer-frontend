import React from 'react';

import './Profile.css'

import { Link } from 'react-router-dom';

function Profile(props) {

  const { buttonText } = props;

  return (
    <main className="profile main-container">
      <h2 className="profile__title">Привет, Елизавета!</h2>
      <form className="profile__form">
        <label className='profile__field'>
          <span className='profile__span'>Имя</span>
          <input className='profile__input' 
            id="input-name" 
            name="name" 
            type="text" 
            minLength={2}
            maxLength={30}
            required />
          <span className="profile__error"></span> 
        </label>
        <label className='profile__field'>
          <span className='profile__span'>E-mail</span>
          <input className='profile__input' 
            id="input-email" 
            name="email" 
            type="email" 
            required />
          <span className="profile__error"></span>
        </label>
      </form>
      <div className="profile__buttons">
        <button className="profile__button-text button-edit">
          { buttonText || 'Редактировать' }
        </button>
        <Link className="profile__button-text button-exit" to='/sign-in'>
          { buttonText || 'Выйти из аккаунта' }
        </Link>
      </div>
    </main>
  );
}

export default Profile;