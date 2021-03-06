import React from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className="header">
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <Link to="/" className="header__link">
              Streamy
            </Link>
          </li>
          <li className="header__item">
            <Link to="/" className="header__link">
              All streams
            </Link>
          </li>
          <li className="header__item">
            <GoogleAuth />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
