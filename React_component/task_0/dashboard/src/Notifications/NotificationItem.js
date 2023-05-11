import React from 'react';
import PropTypes from "prop-types";

class NotificationItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, value, html, markAsRead, id } = this.props;
    return (
      value ?
        <li data-notification-type={type} onClick={() => markAsRead(id)}>
          {value}
        </li> :
        <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}>
      </li>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({__html: PropTypes.string}),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: "default",
  value: "",
  html: {},
  markAsRead: () => {},
  id: NaN,
};

export default NotificationItem;
