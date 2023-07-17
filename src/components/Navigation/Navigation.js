import React from 'react';

import { Link } from 'react-router-dom';

import './Navigation.css';

import account from '../../images/account.svg';

function Navigation() {
  return (
    <div className='header__navigation'>
      <nav class="header__link_nav">
        <Link class="header__link_movies active" to='/movies'>Фильмы</Link>
        <Link class="header__link_movies" to='/saved-movies'>Сохранённые фильмы</Link>
      </nav>

      <button class="account">
        <div class="account__text">Аккаунт</div>
        <Link className='account__link-icon' to='/profile'>
          <img class="account__icon" src={account} alt="иконка человечка" />
        </Link>
      </button>
    </div>
  );
}

export default Navigation;