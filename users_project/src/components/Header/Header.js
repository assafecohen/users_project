import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(props) {
  return (
    <header className='Header_navlinks'>
      <img className='Header_logo' src={logo} alt='logo' />;
      <ul className='nav__links'>
        <li>
          <Link to='/'>Users</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </header>
  );
}

Header.propTypes = {};

export default Header;
