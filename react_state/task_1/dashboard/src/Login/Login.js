import React from 'react';
import {css, StyleSheet} from "aphrodite";

const screenSize = {
  small: "@media screen and (max-width: 900px)",
};

const styles = StyleSheet.create({
  login: {
    marginTop: '1rem',
    [screenSize.small]: {
      marginTop: "10px",
      marginBottom: 0,
    },
  },
  loginInput: {
    [screenSize.small]: {
      margin: 0,
    },
  },
  field: {
    display: 'flex',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    [screenSize.small]: {
      display: "block",
    }
  }
})

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false, email: "", password: "", enableSubmit: false };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
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

  render () {
    return (
      <div className={css(styles.login)}>
        <p>Login to access the full dashboard</p>
        <form className={css(styles.form)} onSubmit={this.handleLoginSubmit}>
          <div className={css(styles.field)}>
            <label htmlFor="email">Email:</label>
            <input type="text"
                   id="email"
                   name="email"
                   className={css(styles.loginInput)}
                   value={this.state.email}
                   onChange={this.handleChangeEmail}
            />
          </div>
          <div className={css(styles.field)}>
            <label htmlFor="email">Password:</label>
            <input type="password"
                   id="password"
                   name="password"
                   className={css(styles.loginInput)}
                   value={this.state.password}
                   onChange={this.handleChangePassword}
            />
          </div>
          <input type="submit" value='OK' disabled={!this.state.enableSubmit} />
        </form>
      </div>
    );
  }
}

export default Login;
