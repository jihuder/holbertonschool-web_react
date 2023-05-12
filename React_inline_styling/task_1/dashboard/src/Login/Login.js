import React from 'react';
import {css, StyleSheet} from "aphrodite";

const styles = StyleSheet.create({
  login: {
    marginTop: '1rem',
  },
})

function Login() {
  return (
    <div className={css(styles.login)}>
      <p>Login to access the full dashboard</p>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" />
        <label htmlFor="email">Password:</label>
        <input type="password" id="password" name="password" />
        <button>OK</button>
      </form>
    </div>
  );
}

export default Login;
