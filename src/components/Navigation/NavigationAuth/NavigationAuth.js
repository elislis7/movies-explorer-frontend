import React from 'react';

import { Link } from 'react-router-dom';

import './NavigationAuth.css';

function NavigationAuth() {
  return (
      <nav className="navigation__auth">
        <Link className="navigation__auth_link navigation__auth_type_register" to='signup'>Регистрация</Link>
        <Link className="navigation__auth_link navigation__auth_type_login" to='signin'>Войти</Link>
      </nav>
  );
}

export default NavigationAuth;