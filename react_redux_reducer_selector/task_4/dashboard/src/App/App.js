import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Footer from "../Footer/Footer";
import { getLatestNotification } from "../utils/utils";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import { user } from "./AppContext";
import AppContext from "./AppContext";

const styles = StyleSheet.create({
  app: {
    margin: 0,
  },

  header: {

  },

  body: {
    display: 'flex',
  },

  footer: {
    borderTop: '3px solid red',
    fontStyle: 'italic',
    position: 'fixed',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
});

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

export const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyCombination = this.handleKeyCombination.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    this.state = { displayDrawer: false, user, logOut: this.logOut, listNotifications };
  }

  markNotificationAsRead(id) {
    this.setState({
      listNotifications: this.state.listNotifications.filter((notification) => {

        return notification.id !== id;
      }),
    });
  }

  handleKeyCombination(e) {
    if (e.key === "h" && e.ctrlKey) {
      alert("Logging you out");
      this.props.logOut();
    }
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  logIn(email, password) {
    this.setState({
      user: { email, password, isLoggedIn: true },
    });
  }

  logOut() {
    this.setState({ user });
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyCombination);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyCombination);
  }

  render() {

    const { displayDrawer, user, user: { isLoggedIn }, logOut, listNotifications } = this.state;

    const value = { user, logOut };

    return (
      <AppContext.Provider value={value}>
        <Notifications listNotifications={listNotifications}
                       displayDrawer={displayDrawer}
                       handleDisplayDrawer={this.handleDisplayDrawer}
                       handleHideDrawer={this.handleHideDrawer}
                       markNotificationAsRead={this.markNotificationAsRead}
        />
        <div className={css(styles.header)}>
          <Header />
        </div>
        <div className={css(styles.body)}>
          {!isLoggedIn ? (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={this.logIn} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          )}
        </div>
        <BodySection title="News from the School">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis efficitur odio, sed efficitur mauris cursus id. Vestibulum cursus libero nec ante scelerisque pretium. Sed vitae nunc eget est malesuada scelerisque ut id odio. Pellentesque consequat diam eu congue aliquet. In auctor urna erat, a ullamcorper nibh tristique ac. Vestibulum condimentum erat a sapien fringilla hendrerit. Nam ut dapibus quam, quis porttitor mi. Aliquam ac tellus vestibulum, viverra odio et, feugiat purus.</p>
        </BodySection>
        <div className={css(styles.footer)}>
          <Footer />
        </div>
      </ AppContext.Provider>
    );
  }
}
/*
App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};
*/

export default App;
