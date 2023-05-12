import React from 'react';
import logo from '../assets/holberton_logo.jpg';
import './Header.css';

function Header() {
  return (
    <>
      <img src={logo} alt="hbtn-logo" width="220" /><h1>School dashboard</h1>
    </>
  );
}

export default Header;
