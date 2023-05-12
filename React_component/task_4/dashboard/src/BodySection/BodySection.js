import React from "react";
import PropTypes from "prop-types";

class BodySection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, title } = this.props;
    return (
      <div className="bodySection">
        <h2>{ title }</h2>
        { children }
      </div>
    );
  }
}

BodySection.defaultProps = {
  title: '',
};

BodySection.propTypes = {
  title: PropTypes.string,
};

export default BodySection;
