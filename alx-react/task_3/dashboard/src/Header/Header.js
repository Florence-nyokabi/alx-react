import React from 'react';
import logo from '../assets/holberton_logo.jpg';
import { StyleSheet, css } from 'aphrodite';

function Header() {
  return (
    <div className={css(headerStyles.appHeader)}>
      <img src={logo} alt="logo" className={css(headerStyles.appLogo)}/>
      <h1 className={css(headerStyles.h1)}>School dashboard</h1>
    </div>
  )
}

const headerStyles = StyleSheet.create({
	h1: {
		marginLeft: '3rem',
    flex: 2,
    '@media (max-width: 900px)': {
      margin: 'auto'
    }
	},

	appHeader: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		color: '#E11D3F',
		borderBottom: '1px solid #E11D3F',
    maxWidth: '100vw',
    boxSizing: 'border-box'
	},

	appLogo: {
		maxHeight: '200px',
		maxWidth: '200px',
    height: 'auto',
    width: 'auto',
    flex: 1
	}
});

export default Header;
