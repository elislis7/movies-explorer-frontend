import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Header.css'

import logo from '../../images/logo.svg';

import NavigationAuth from '../Navigation/NavigationAuth/NavigationAuth';
import Navigation from '../Navigation/Navigation';

function Header(props) {

  const { isLoggedIn } = props;

  const [isMenuOpened, setIsMenuOpened] = useState(false);

  function onClickBurgerMenu() {
    setIsMenuOpened((prevState) => !prevState);
  }

  return (
    <header className='header'>
      <div className='header__container-hidden'>
        {isMenuOpened && ( 
        <div className="header__description-hidden"> 
          <nav className="burger__menu_links">
            <Link className="burger__menu_link" to="/">Главная</Link>
              { isLoggedIn && <Navigation /> }
          </nav>
        </div> 
        )}
      </div>

      <div className='header__container'>
        <Link className='header__link' to='/'>
          <img className="header__logo" src={logo} alt="Логотип сайта"/> 
        </Link>
        <div className="header__link_visible"> 
          { !isLoggedIn && <NavigationAuth /> }
        </div> 
        <div className="header__link_invise"> 
          { isLoggedIn && <Navigation /> }
        </div> 
      </div>

      { isLoggedIn && (
        <div className='header__burger'>
          <button 
          className={` ${
            isMenuOpened ? "header__burger-close" : "header__burger-open"
          }`}
          onClick={onClickBurgerMenu} >
          </button>
        </div>
      )}

    </header>
  );
}

export default Header;