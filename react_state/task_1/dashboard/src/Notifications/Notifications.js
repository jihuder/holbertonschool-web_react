import React from "react";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import close_icon from '../assets/close-icon.png';
import { StyleSheet, css } from 'aphrodite';

const screenSize = {
  small: "@media screen and (max-width: 900px)",
};

const opacityKeyframes = {
  from: {
    opacity: 0.5,
  },

  to: {
    opacity: 1,
  },
};

const translateYKeyframes = {
  "0%": {
    transform: "translateY(0)",
  },

  "50%": {
    transform: "translateY(-5px)",
  },

  "75%": {
    transform: "translateY(5px)",
  },

  "100%": {
    transform: "translateY(0)",
  },
};

const styles = StyleSheet.create({
  notifications: {
    border: '2px dashed red',
    padding: '.5rem .2rem',
    position: 'absolute',
    width: '40%',
    right: '1rem',
    top: '1rem',
    [screenSize.small]: {
      width: '100%',
      height: '100%',
      margin: 0,
      right: 0,
      border: 0,
      top:0,
      backgroundColor: 'white',
      zIndex: 1,
    },
  },
  menuItem: {
    textAlign: 'right',
    margin: '0 1em',
    ":hover": {
      cursor: "pointer",
      animationName: [opacityKeyframes, translateYKeyframes],
      animationDuration: "1s, 0.5s",
      animationIterationCount: 3,
    },
  },

  hideMenuItem: {
    display: 'none',
  },

  showMenuItem: {
    display: 'block',
  },

  notification: {
    [screenSize.small]: {
      fontSize: '20px',
      margin: '1.5rem .3rem',
    },
  },
  ul: {
    [screenSize.small]: {
      padding: '0',
    }
  },
});

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length >
      this.props.listNotifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer } = this.props;
    const closeStyle = {
      position: 'absolute',
      textAlign: 'right',
      top: '14px',
      right: '12px',
      backgroundColor: 'white',
      border: 0,
    };
    const notificationsList = listNotifications.length > 0 ?
      listNotifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          id={notification.id}
          type={notification.type}
          value={notification.value}
          html={notification.html}
          markAsRead={this.markAsRead}
        />
      )) : <NotificationItem value="No new notification for now" />
    const notifications = displayDrawer ? <div className={css(styles.notifications)}>
      <button style={closeStyle}
              aria-label="Close"
              onClick={handleHideDrawer}
      >
        <img src={close_icon} alt="close-icon" width="10" />
      </button>
      <p className={css(styles.notification)}> Here is the list of notifications</p>
      <ul className={css(styles.ul)}>
        {notificationsList}
      </ul>
    </div> : undefined;

    return (
      <>
        <div className={[css(styles.menuItem),
          displayDrawer ?
            css(styles.hideMenuItem) :
            css(styles.showMenuItem)].join(' ')}
             onClick={handleDisplayDrawer}
        >
          <p>Your notifications</p>
        </div>
        {notifications}
      </>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

export default Notifications;
