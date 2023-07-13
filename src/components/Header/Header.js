import React from 'react';
import { Link } from "react-router-dom";

import './Header.css'

import logo from '../../images/logo.svg';

import NavigationAuth from '../Navigation/NavigationAuth/NavigationAuth';
import Navigation from '../Navigation/Navigation';

function Header(props) {

  const { isLoggedIn } = props;

  return (
    <header className={`header ${!isLoggedIn ? 'header__auth-hidden' : '' }`}>
      <div className="header__container">
        <Link className='header__link' to='/'>
          <img className="header__logo" src={logo} alt="логотип сайта"/> 
        </Link>
        { !isLoggedIn && <NavigationAuth /> }
        { isLoggedIn && <Navigation /> }
      </div>
    </header>
  );
}

export default Header;