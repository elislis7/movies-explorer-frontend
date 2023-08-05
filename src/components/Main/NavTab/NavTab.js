import React from 'react';
import { Link } from 'react-scroll';

import './NavTab.css';

function NavTab() {
  return (
    <nav className='navigate'>
      <Link className='navigate__link' to={'project'} smooth={true} duration={1000}>О проекте</Link>
      <Link className='navigate__link' to={'techs'} smooth={true} duration={1000}>Технологии</Link>
      <Link className='navigate__link' to={'student'} smooth={true} duration={1000}>Студент</Link>
    </nav>
  );
}

export default NavTab;