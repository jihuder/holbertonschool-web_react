import React from 'react';

function NotificationItem({ type, value, html }) {
  return (
    value ? <li data-notification-type={type}>
      {value}
    </li> : <li data-notification-type={type} dangerouslySetInnerHTML={html}>
    </li>
  );
}

export default NotificationItem;
