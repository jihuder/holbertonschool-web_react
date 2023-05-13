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
      //border: 0,
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
function Login() {
  return (
    <div className={css(styles.login)}>
      <p>Login to access the full dashboard</p>
      <form className={css(styles.form)}>
        <div className={css(styles.field)}>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" className={css(styles.loginInput)} />
        </div>
        <div className={css(styles.field)}>
          <label htmlFor="email">Password:</label>
          <input type="password" id="password" name="password" className={css(styles.loginInput)} />
        </div>
        <button>OK</button>
      </form>
    </div>
  );
}

export default Login;
