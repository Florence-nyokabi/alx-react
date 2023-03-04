import React, { PureComponent, Fragment } from 'react';
import close_icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
      markNotificationAsRead,
    } = this.props;
    const show = css(displayDrawer ? styles.showOff : styles.showOn);
    return (
      <Fragment>
        <div
          className={css(styles.menuItem)}
          onClick={handleDisplayDrawer}
          id='menuItem'
        >
          <p className={show}>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <p>Here is the list of notifications</p>
            <ul>
              {listNotifications.length === 0 && (
                <NotificationItem value='No new notification for now' />
              )}
              {listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markAsRead={markNotificationAsRead}
                />
              ))}
            </ul>
            <button
              type='button'
              aria-label='Close'
              onClick={handleHideDrawer}
              id='close'
              style={{
                display: 'inline-block',
                position: 'absolute',
                top: '56px',
                right: '16px',
                background: 0,
                border: 0,
                outline: 'none',
                cursor: 'pointer',
                zIndex: 1,
              }}
            >
              <img
                src={close_icon}
                alt=''
                style={{ width: '8px', height: '8px' }}
              />
            </button>
          </div>
        )}
      </Fragment>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
};

const screenSize = {
  small: '@media screen and (max-width: 900px)',
};

const opacityKf = {
  from: {
    opacity: 0.5,
  },

  to: {
    opacity: 1,
  },
};

const translateYkf = {
  '0%': {
    transform: 'translateY(0)',
  },

  '50%': {
    transform: 'translateY(-5px)',
  },

  '75%': {
    transform: 'translateY(5px)',
  },

  '100%': {
    transform: 'translateY(0)',
  },
};

const borderKf = {
  '0%': {
    border: `3px dashed cyan`,
  },

  '100%': {
    border: `3px dashed #e0344a`,
  },
};

const styles = StyleSheet.create({
  notifications: {
    fontSize: '20px',
    border: 'thin dotted #e0344a',
    padding: '4px 16px',
    float: 'right',
    animationName: [borderKf],
    animationDuration: '0.8s',
    animationIterationCount: 1,
    animationFillMode: 'forwards',
    [screenSize.small]: {
      width: '90%',
      border: 'none',
      backgroundColor: 'white',
    },
  },
  menuItem: {
    textAlign: 'right',
    marginRight: '16px',
    ':hover': {
      cursor: 'pointer',
      animationName: [opacityKf, translateYkf],
      animationDuration: '1s, 0.5s',
      animationIterationCount: 3,
    },
  },
  showOff: {
    marginRight: '8px',
    [screenSize.small]: {
      display: 'none',
    },
  },

  showOn: {
    marginRight: '8px',
  },
});

export default Notifications;
