import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();

    const { email, password } = this.state;

    this.props.logIn(email, password);
  }

  handleChangeEmail(event) {
    const { value } = event.target;
    const { password } = this.state;

    if (value !== "" && password !== "") this.setState({ enableSubmit: true });
    else this.setState({ enableSubmit: false });

    this.setState({ email: event.target.value });
  }

  handleChangePassword(event) {
    const { value } = event.target;
    const { email } = this.state;

    if (email !== "" && value !== "") this.setState({ enableSubmit: true });
    else this.setState({ enableSubmit: false });

    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <div className={css(styles.login)}>
        <p>Login to access the full dashboard</p>
        <form action="" onSubmit={this.handleLoginSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className={css(styles.loginInput)}
            value={this.state.email}
            onChange={this.handleChangeEmail}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            className={css(styles.loginInput)}
            value={this.state.password}
            onChange={this.handleChangePassword}
          />
          <input type="submit" disabled={!this.state.enableSubmit} />
        </form>
      </div>
    );
  }
}

const screenSize = {
  small: "@media screen and (max-width: 900px)",
};

const styles = StyleSheet.create({
  login: {
    margin: "50px",
    flexGrow: 1,
    [screenSize.small]: {
      marginTop: "10px",
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
    },
  },

  loginInput: {
    marginLeft: "10px",
    marginRight: "20px",
    [screenSize.small]: {
      display: "block",
      marginLeft: 0,
      marginTop: "10px",
      marginBottom: "10px",
    },
  },
});

export default Login;
