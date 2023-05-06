import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import close_icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';

function Notifications() {
  const closeStyle = {
    position: 'absolute',
    textAlign: 'right',
    top: '14px',
    right: '12px',
    backgroundColor: 'white',
    border: 0,
  };
  return (
    <div className="Notifications">
      <button style={closeStyle} aria-label="Close" onClick={() => console.log('Close button has been clicked')}>
        <img src={close_icon} alt="close-icon" width="10"/>
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
}

export default Notifications;
