import React from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropeTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {!this.props.displayDrawer ?
          <div className={css(notificationStyles.menuItem)} onClick={this.props.handleDisplayDrawer}>
            Your notifications
          </div>
        :
          <div className={css(notificationStyles.notifications)}>
            <button style={{
              color: '#3a3a3a',
              fontWeight: 'bold',
              background: 'none',
              border: 'none',
              fontSize: '15px',
              position: 'absolute',
              right: '3px',
              top: '3px',
              cursor: 'pointer',
              outline: 'none',
            }}
            aria-label="Close"
            className={css(notificationStyles.button)}
            onClick={(e) => {
              console.log('Close button has been clicked');
              this.props.handleHideDrawer();
            }}
            >
              <img src={closeIcon} alt="close icon" width="15px" />
            </button>
            {
              this.props.listNotifications.length != 0 ?
                <p>Here is the list of notifications</p>
              : null
            }
            <ul className={css(notificationStyles.ul)}>
              {
                this.props.listNotifications.length == 0 ?
                  <NotificationItem type="default" value="No new notification for now" />
                : null
              }
              {
                this.props.listNotifications.map((val, idx)=> {
                  return <NotificationItem
                  type={val.type}
                  value={val.value}
                  html={val.html}
                  key={val.id}
                  markAsRead={this.markAsRead}
                  id={val.id}
                />
                })
              }
            </ul>
          </div>
        }
        
      </>
    );
  }
}

const opacityAnim = {
  '0%': { opacity: 0.5 },
  '100%': { opacity: 1}
};

const bounceAnim = {
  '0%': { transform: 'translateY(0px)' },
  '33%': { transform: 'translateY(-5px)'},
  '66%': { transform: 'translateY(5px)'},
  '100%': { transform: 'translateY(0px)'},
};

const notificationStyles = StyleSheet.create({
	notifications: {
    border: '3px dotted var(--holberton-red)',
    padding: '6px 12px',
    position: 'absolute',
    top: '21px',
    right: '7px',
    marginTop: '12px',
    zIndex: '100',
    '@media (max-width: 900px)': {
      width: '100%',
      padding: '0px',
      fontSize: 20,
      position: 'relative',
      right: 0,
      left: 0,
      border: 'none',
    }
	},
  menuItem: {
    position: 'relative',
    zIndex: 100,
    float: 'right',
    backgroundColor: '#fff8f8',
    ':hover': {
      cursor: 'pointer',
      animationName: [opacityAnim, bounceAnim],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3'
    }
  },
  ul: {
    '@media (max-width: 900px)': {
      padding: 0
    }
  },
  button: {
    '@media (max-width: 900px)': {
      position: 'relative',
      float: 'right',
    }
  }
});

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

Notifications.propTypes = {
  displayDrawer: PropeTypes.bool,
  listNotifications: PropeTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropeTypes.func,
  handleHideDrawer: PropeTypes.func,
};

export default Notifications;
