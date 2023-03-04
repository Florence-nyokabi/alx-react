import React, { Component } from 'react'
import PropTypes from 'prop-types';

class BodySection extends Component {
  render() {
    return (
      <div className='bodySection'>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}

BodySection. defaultProps = {
	children: <React.Fragment />
};

BodySection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
};

export default BodySection;
