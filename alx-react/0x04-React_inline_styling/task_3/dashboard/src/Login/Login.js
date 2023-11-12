import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <React.Fragment>
      <div className={css(loginStyles.appBody)}>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" className={loginStyles.inputs} />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" className={loginStyles.inputs} />
        <button>OK</button>
      </div>
    </React.Fragment>
  )
}

const loginStyles = StyleSheet.create({
	appBody: {
    padding: '36px 24px',
		'@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column'
    }
	},

	inputs: {
		margin: '0 16px 0 8px'
	}
})


export default Login;
