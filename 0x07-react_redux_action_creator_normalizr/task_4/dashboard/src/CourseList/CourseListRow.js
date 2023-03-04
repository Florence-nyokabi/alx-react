import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const [checkbox, setCheckbox] = useState(false);

  const handleClick = () => {
    setCheckbox(!checkbox);
  };

  const bgColor1 = { backgroundColor: '#f5f5f5ab' };
  const bgColor2 = { backgroundColor: '#deb5b545' };
  let bgColor = undefined;
  let content = undefined;

  if (isHeader === true) {
    bgColor = bgColor2;
    if (textSecondCell === null) {
      content = <th colSpan='2'>{textFirstCell}</th>;
    } else {
      content = (
        <Fragment>
          <th className={css(styles.th)}>{textFirstCell}</th>
          <th className={css(styles.th)}>{textSecondCell}</th>
        </Fragment>
      );
    }
  }
  if (isHeader === false) {
    bgColor = bgColor1;
    content = (
      <Fragment>
        <td>
          <input type='checkbox' onClick={handleClick}></input>
          {textFirstCell}
        </td>
        <td>{textSecondCell}</td>
      </Fragment>
    );
  }

  return <tr style={bgColor}>{content}</tr>;
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const styles = StyleSheet.create({
  th: {
    textAlign: 'left',
    borderTop: '1px solid gray',
    borderBottom: '1px solid gray',
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
});

export default CourseListRow;
