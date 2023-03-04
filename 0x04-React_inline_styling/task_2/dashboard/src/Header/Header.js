import React from 'react';
import logo from '../assets/holberton_logo.jpg';
import { StyleSheet, css } from 'aphrodite';


function Header() {
  return (
    <div className={css(headerStyles.appHeader)}>
      <img src={logo} alt="logo" className={css(headerStyles.appLogo)} />
      <h1 className={css(headerStyles.h1)}>School dashboard</h1>
    </div>
  )
}

const headerStyles = StyleSheet.create({ 
  appHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    borderBottom: '3px solid #e1484c',
    marginTop: '30px'
  },

  appLogo: {
		width: '150px'
	},

  h1: {
		margin: 'auto auto auto 0',
    marginLeft: '3rem'
	},
});

export default Header;
