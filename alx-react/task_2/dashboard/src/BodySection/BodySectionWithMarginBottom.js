import React, { Component } from 'react'
import BodySection from './BodySection';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className={css(bodySection.bodySectionWithMargin)}>
        <BodySection {...this.props}/>
      </div>
    );
  }
};

const bodySection = StyleSheet.create({
  bodySectionWithMargin : {
    marginBottom: '40px'
  }
});

BodySectionWithMarginBottom. defaultProps = {
	children: <React.Fragment />
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
};

export default BodySectionWithMarginBottom;
