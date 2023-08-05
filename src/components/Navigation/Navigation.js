import { Link, NavLink } from 'react-router-dom';

import './Navigation.css';

import account from '../../images/account.svg';

function Navigation(props) {

  const { onClickLink } = props;

  const makeActive = ({ isActive }) =>
    isActive ? 'navigation-link-movies navigation-link-movies_active' : 'navigation-link-movies';

  return (
    <div className='navigation'>
      <nav className='navigation-links'>
        <NavLink className={makeActive} to='/movies' onClick={onClickLink}>Фильмы</NavLink>
        <NavLink className={makeActive} to='/saved-movies' onClick={onClickLink}>Сохранённые фильмы</NavLink>
      </nav>

      <button className='account' onClick={onClickLink}>
        <div className='account__text'>Аккаунт</div>
        <Link className='account__link-icon' to='/profile'>
          <img className='account__icon' src={account} alt='Иконка человечка' />
        </Link>
      </button>
    </div>
  );
}

export default Navigation;