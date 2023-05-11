import React from "react";
import PropTypes from "prop-types";

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  let value;

  if (isHeader) {
    if (textSecondCell) {
      value = (
        <>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </>
      );
    } else {
      value = <th colSpan="2">{textFirstCell}</th>;
    }
  } else {
    value = (
      <>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </>
    );
  }
  return <tr>{value}</tr>;
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
