import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.logIn(email, password);
  }

  handleChangeEmail(e) {
    const { value } = e.target;
    const { password } = this.state;

    if (value !== '' && password !== '') this.setState({ enableSubmit: true });
    else this.setState({ enableSubmit: false });

    this.setState({ email: e.target.value });
  }

  handleChangePassword(e) {
    const { value } = e.target;
    const { email } = this.state;

    if (email !== '' && value !== '') this.setState({ enableSubmit: true });
    else this.setState({ enableSubmit: false });

    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <main role='main' className={css(styles.login)}>
        <p>Login to access the full dashboard</p>
        <form action='' onSubmit={this.handleLoginSubmit}>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            className={css(styles.inp)}
            value={this.state.email}
            onChange={this.handleChangeEmail}
          />
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            name='password'
            className={css(styles.inp)}
            value={this.state.password}
            onChange={this.handleChangePassword}
          />
          <button
            type='submit'
            className={css(styles.btn)}
            disabled={!this.state.enableSubmit}
          >
            OK
          </button>
        </form>
      </main>
    );
  }
}
const screenSize = {
  small: '@media screen and (max-width: 900px)',
};

const styles = StyleSheet.create({
  login: {
    padding: '16px 24px',
    [screenSize.small]: {
      width: '90%',
      padding: 0,
    },
  },
  inp: {
    margin: '4px',
    [screenSize.small]: {
      display: 'block',
      border: 'none',
      margin: 0,
    },
  },
  btn: {
    margin: '4px',
    cursor: 'pointer',
    [screenSize.small]: {
      width: '32px',
      display: 'block',
      margin: 0,
    },
  },
});

export default Login;
