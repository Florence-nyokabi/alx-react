import React, { useEffect, useState } from "react";
import { StyleSheet, css } from "aphrodite";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      email: "",
      password: "",
      enableSubmit: false,
    };
  }

  handleLoginSubmit = (e) => {
    e.preventDefault();
    this.setState({ isLoggedIn: true });
  };

  handleChangeEmail = (e) => {
    e.preventDefault();
    this.setState({ email: e.target.value }, this.handleEnableSubmit);
  };

  handleChangePassword = (e) => {
    e.preventDefault();
    this.setState({ password: e.target.value }, this.handleEnableSubmit);
  };

  handleEnableSubmit = () => {
    if (this.state.email !== "" && this.state.password !== "") {
      this.setState({ enableSubmit: true });
    } else {
      this.setState({ enableSubmit: false });
    }
  };

  render() {
    const {email, password} = this.state;
    return (
      <React.Fragment>
        <div className={css(loginStyles.appBody)}>
          <p>Login to access the full dashboard</p>
          <form onSubmit={this.handleLoginSubmit}>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              className={loginStyles.inputs}
              value={this.state.email}
              onChange={this.handleChangeEmail}
            />
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              name="password"
              className={loginStyles.inputs}
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
            <input type="submit" value="OK" disabled={this.state.enableSubmit ? false : true} />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

const loginStyles = StyleSheet.create({
  appBody: {
    padding: "36px 24px",
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
    },
  },

  inputs: {
    margin: "0 16px 0 8px",
  },
});

export default Login;
