import React from 'react';
import PropTypes from "prop-types";
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import close_icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';


function Notifications({displayDrawer}) {
  const closeStyle = {
    position: 'absolute',
    textAlign: 'right',
    top: '14px',
    right: '12px',
    backgroundColor: 'white',
    border: 0,
  };

  const notifications = displayDrawer ? <div className="Notifications">
    <button style={closeStyle} aria-label="Close" onClick={() => console.log('Close button has been clicked')}>
      <img src={close_icon} alt="close-icon" width="10"/>
    </button>
    <p>Here is the list of notifications</p>
    <ul>
      <NotificationItem type="default" value="New course available" />
      <NotificationItem type="urgent" value="New resume available" />
      <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
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
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
