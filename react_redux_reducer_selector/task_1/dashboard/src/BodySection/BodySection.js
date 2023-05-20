import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  bodySection: {
    display: "flex",
    flexWrap: "wrap",
    padding: "3rem 3rem 0 3rem",
  },

  h2: {
    width: "100%",
    margin: "0",
  },
})

class BodySection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, title } = this.props;
    return (
      <div className={css(styles.bodySection)}>
        <h2 className={css(styles.h2)}>{title}</h2>
        {children}
      </div>
    );
  }
}

BodySection.defaultProps = {
  title: "",
};

BodySection.propTypes = {
  title: PropTypes.string,
};

export default BodySection;
