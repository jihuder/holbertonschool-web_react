import React from "react";
import PropTypes from "prop-types";

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  let value;
  const row = {
    backgroundColor: '#f5f5f5ab',
  }
  const header = {
    backgroundColor: '#deb5b545',
  }

  if (isHeader) {
    if (textSecondCell) {
      value = (
        <>
          <th style={header}>{textFirstCell}</th>
          <th style={header}>{textSecondCell}</th>
        </>
      );
    } else {
      value = <th style={header} colSpan="2">{textFirstCell}</th>;
    }
  } else {
    value = (
      <>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </>
    );
  }
  return <tr style={row}>{value}</tr>;
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
