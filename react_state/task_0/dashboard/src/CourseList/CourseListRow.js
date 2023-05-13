import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  let value;

  const styles = StyleSheet.create({
    row: {
      backgroundColor: '#f5f5f5ab',
    },
    th: {
      backgroundColor: '#deb5b545',
      borderBottom: '1px solid rgb(170, 170, 170)',
    }
  });

  if (isHeader) {
    if (textSecondCell) {
      value = (
        <>
          <th className={css(styles.th)}>{textFirstCell}</th>
          <th className={css(styles.th)}>{textSecondCell}</th>
        </>
      );
    } else {
      value = <th className={css(styles.th)} colSpan="2">{textFirstCell}</th>;
    }
  } else {
    value = (
      <>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </>
    );
  }
  return <tr className={css(styles.row)}>{value}</tr>;
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
