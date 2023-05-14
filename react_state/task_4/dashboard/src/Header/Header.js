import React from 'react';
import logo from '../assets/holberton_logo.jpg';
import {css, StyleSheet} from "aphrodite";
import AppContext from "../App/AppContext";

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
  },

  logoutSection: {
    color: "black",
    position: "absolute",
    right: 0,
    paddingRight: "20px",
    alignSelf: "flex-end",
  },

  logoutSectionSpan: {
    fontStyle: "italic",
    cursor: "pointer",
  },
})
class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, logOut } = this.context;

    return (
      <div className={css(styles.header)}>
        <img src={logo} alt="hbtn-logo"  className={css(styles.img)} />
        <h1 className={css(styles.h1)} >School dashboard</h1>
        {user.isLoggedIn && (
          <p id="logoutSection" className={css(styles.logoutSection)}>
            Welcome <b>{`${user.email}`}</b>
            <span onClick={logOut} className={css(styles.logoutSectionSpan)}>
              (logout)
            </span>
          </p>
        )}
      </div>
    );
  }
}
Header.contextType = AppContext;

export default Header;
