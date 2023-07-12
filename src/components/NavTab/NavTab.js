import React from 'react';
import { Link } from "react-router-dom";

import './NavTab.css';

function NavTab() {
  return (
    <nav className="navigate">
      <Link className="navigate__link" to={'project'}>О проекте</Link>
      <Link className="navigate__link" to={'techs'}>Технологии</Link>
      <Link className="navigate__link" to={'about'}>Студент</Link>
    </nav>
  );
}

export default NavTab;