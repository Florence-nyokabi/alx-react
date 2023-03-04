import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class BodySection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, title } = this.props;
    return (
      <div className={css(styles.bodySection)}>
        <h2 className={css(styles.heading)}>{title}</h2>
        {children}
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

const screenSize = {
  small: '@media screen and (max-width: 900px)',
};

const styles = StyleSheet.create({
  bodySection: {
    width: '100%',
    marginTop: '160px',
    display: 'flex',
    flexWrap: 'wrap',
    padding: '32px',
    [screenSize.small]: {
      margin: '240px 0 -240px',
      padding: '16px',
    },
  },
  heading: {
    width: '100%',
  },
});

export default BodySection;
