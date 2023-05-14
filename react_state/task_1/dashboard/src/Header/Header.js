import React from 'react';
import logo from '../assets/holberton_logo.jpg';
import {css, StyleSheet} from "aphrodite";
const styles = StyleSheet.create({
  img: {
    width: "220px",
  },

  h1: {
    color: 'red',
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '3px solid red',
  }
})
function Header() {
  return (
    <div className={css(styles.header)}>
      <img src={logo} alt="hbtn-logo"  className={css(styles.img)} />
      <h1 className={css(styles.h1)} >School dashboard</h1>
    </div>
  );
}

export default Header;
