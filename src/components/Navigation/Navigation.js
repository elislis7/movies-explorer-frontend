import React from 'react';

import { Link } from 'react-router-dom';

import './Navigation.css';

import account from '../../images/account.svg';

function Navigation() {
  return (
    <div className='navigation'>
      <nav className="navigation-links">
        <Link className="navigation-link-movies active" to='/movies'>Фильмы</Link>
        <Link className="navigation-link-movies" to='/saved-movies'>Сохранённые фильмы</Link>
      </nav>

      <button className="account">
        <div className="account__text">Аккаунт</div>
        <Link className='account__link-icon' to='/profile'>
          <img className="account__icon" src={account} alt="Иконка человечка" />
        </Link>
      </button>
    </div>
  );
}

export default Navigation;