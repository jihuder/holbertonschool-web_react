import React from 'react';
import PropTypes from "prop-types";
import './Notifications.css';
import close_icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from "./NotificationItemShape";

function Notifications( { displayDrawer, listNotifications } ) {
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
        type={notification.type}
        value={notification.value}
        html={notification.html}
      />
    )) : <NotificationItem value="No new notification for now" />

  const notifications = displayDrawer ? <div className="Notifications">
    <button style={closeStyle} aria-label="Close" onClick={() => console.log('Close button has been clicked')}>
      <img src={close_icon} alt="close-icon" width="10"/>
    </button>
    <p>Here is the list of notifications</p>
    <ul>
      { notificationsList }
    </ul>
  </div> : undefined;

  return (
    <>
      <div className="menuItem">
        <p>Your notifications</p>
      </div>
      { notifications }
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
