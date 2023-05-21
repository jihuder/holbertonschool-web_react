import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  let value;

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const styles = StyleSheet.create({
    row: {
      backgroundColor: '#f5f5f5ab',
    },
    th: {
      backgroundColor: '#deb5b545',
      borderBottom: '1px solid rgb(170, 170, 170)',
    },
    rowChecked: {
      backgroundColor: "#e6e4e4",
    },
  });

  const tableItemStyle = css(
    isHeader ? styles.th : styles.row,
    isChecked && styles.rowChecked
  );

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
        <td className={tableItemStyle}>
          <input type="checkbox" onClick={handleCheckbox}></input>
          {textFirstCell}
        </td>
        <td className={tableItemStyle}>{textSecondCell}</td>
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
