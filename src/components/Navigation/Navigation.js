import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

import account from '../../images/account.svg';

function Navigation() {

  const [showItems, setShowItems] = useState(false);
  
  function handleToggleMenu () {
      setShowItems(!showItems);
  };
  
  return (
    <div className='navigation'>
      <nav className="navigation-links">
        <Link className="navigation-link-movies active" to='/movies' onClick={handleToggleMenu}>Фильмы</Link>
        <Link className="navigation-link-movies" to='/saved-movies' onClick={handleToggleMenu}>Сохранённые фильмы</Link>
      </nav>

      <button className="account" onClick={handleToggleMenu}>
        <div className="account__text">Аккаунт</div>
        <Link className='account__link-icon' to='/profile'>
          <img className="account__icon" src={account} alt="Иконка человечка" />
        </Link>
      </button>
    </div>
  );
}

export default Navigation;