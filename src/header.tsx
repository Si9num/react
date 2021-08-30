import React from 'react';
import { Link } from 'react-router-dom';
import { changeColAb, changeColH } from './changeCol';
/* eslint-disable arrow-body-style */
const Header = () => {
  return (
    <header>
      <nav className="nav">
        <ul className="list">
          <li onClick={changeColH}>
            <Link className="home" to="/">
              Home
            </Link>
          </li>
          <li onClick={changeColAb}>
            <Link className="about" to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
