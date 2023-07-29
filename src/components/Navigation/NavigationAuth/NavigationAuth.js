import React from 'react';

import { Link } from 'react-router-dom';

import './NavigationAuth.css';

function NavigationAuth() {
  return (
      <nav className="navigation-auth">
        <Link className="navigation-auth__link navigation-auth-type-register" to='signup'>Регистрация</Link>
        <Link className="navigation-auth__link navigation-auth-type-login" to='signin'>Войти</Link>
      </nav>
  );
}

export default NavigationAuth;