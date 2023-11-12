import React from 'react';
import logo from '../assets/holberton_logo.jpg';
import './Header.css';

function Header() {
  return (
    <div className="App-header">
      <img src={logo} alt="logo" />
      <h1>School dashboard</h1>
    </div>
  )
}

export default Header;
