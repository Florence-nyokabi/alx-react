import React, { PureComponent, Component } from "react";
import { connect } from "react-redux";
import {
  fetchNotifications,
  markAsAread,
  setNotificationFilter,
} from "../actions/notificationActionCreators";
import NotificationItem from "./NotificationItem";
import { getUnreadNotificationsByType } from "../selectors/notificationSelector";
import PropTypes from "prop-types";
import closeIcon from "../assets/close-icon.png";
import { StyleSheet, css } from "aphrodite";

export class Notifications extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
      markNotificationAsRead,
      setNotificationFilter,
    } = this.props;

    // const displayDrawer = true;

    const menuPStyle = css(
      displayDrawer ? styles.menuItemPNoShow : styles.menuItemPShow
    );

    return (
      <>
        <div
          className={css(styles.menuItem)}
          id="menuItem"
          onClick={handleDisplayDrawer}
        >
          <p className={menuPStyle}>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(styles.notifications)} id="Notifications">
            <button
              style={{
                background: "transparent",
                border: "none",
                position: "absolute",
                right: 20,
              }}
              aria-label="close"
              onClick={handleHideDrawer}
              id="closeNotifications"
            >
              <img
                src={closeIcon}
                alt="close-icon"
                className={css(styles.notificationsButtonImage)}
              />
            </button>
            <p className={css(styles.notificationsP)}>
              Here is the list of notifications
            </p>
            <button
              type="button"
              className={css(styles.filterButton)}
              id="buttonFilterUrgent"
              onClick={() => {
                setNotificationFilter("URGENT");
              }}
            >
              ❗❗
            </button>
            <button
              type="button"
              className={css(styles.filterButton)}
              id="buttonFilterDefault"
              onClick={() => {
                setNotificationFilter("DEFAULT");
              }}
            >
              💠
            </button>
            <ul className={css(styles.notificationsUL)}>
              {(!listNotifications || listNotifications.count() === 0) && (
                <NotificationItem
                  type="noNotifications"
                  value="No new notifications for now"
                />
              )}

              {listNotifications &&
                listNotifications.valueSeq().map((notification) => {
                  let html = notification.get("html");

                  if (html) html = html.toJS();

                  return (
                    <NotificationItem
                      key={notification.get("guid")}
                      id={notification.get("guid")}
                      type={notification.get("type")}
                      value={notification.get("value")}
                      html={html}
                      markAsRead={markNotificationAsRead}
                    />
                  );
                })}
            </ul>
          </div>
        )}
      </>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: null,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
  fetchNotifications: () => {},
  setNotificationFilter: () => {},
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.object,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
  setNotificationFilter: PropTypes.func,
};

const cssVars = {
  mainColor: "#e01d3f",
};

const screenSize = {
  small: "@media screen and (max-width: 900px)",
};

const opacityKeyframes = {
  from: {
    opacity: 0.5,
  },

  to: {
    opacity: 1,
  },
};

const translateYKeyframes = {
  "0%": {
    transform: "translateY(0)",
  },

  "50%": {
    transform: "translateY(-5px)",
  },

  "75%": {
    transform: "translateY(5px)",
  },

  "100%": {
    transform: "translateY(0)",
  },
};

const borderKeyframes = {
  "0%": {
    border: `3px dashed deepSkyBlue`,
  },

  "100%": {
    border: `3px dashed ${cssVars.mainColor}`,
  },
};

const styles = StyleSheet.create({
  menuItem: {
    float: "right",
    backgroundColor: "#fff8f8",
    ":hover": {
      cursor: "pointer",
      animationName: [opacityKeyframes, translateYKeyframes],
      animationDuration: "1s, 0.5s",
      animationIterationCount: 3,
    },
  },

  menuItemPNoShow: {
    marginRight: "8px",
    display: "none",
  },

  menuItemPShow: {
    marginRight: "8px",
  },

  notifications: {
    // float: "right",
    // border: `3px dashed ${cssVars.mainColor}`,
    padding: "10px",
    marginBottom: "20px",
    animationName: [borderKeyframes],
    animationDuration: "0.8s",
    animationIterationCount: 1,
    animationFillMode: "forwards",
    ":hover": {
      border: `3px dashed deepSkyBlue`,
      // animationFillMode: "forwards",
    },
    [screenSize.small]: {
      float: "none",
      border: "none",
      listStyle: "none",
      padding: 0,
      fontSize: "20px",
      ":hover": {
        border: "none",
        // animationFillMode: "forwards",
      },
      position: "absolute",
      background: "white",
      height: "110vh",
      width: "100vw",
      zIndex: 10,
    },
  },

  notificationsButtonImage: {
    width: "10px",
  },

  notificationsP: {
    margin: 0,
    marginTop: "15px",
  },

  notificationsUL: {
    [screenSize.small]: {
      padding: 0,
    },
  },

  filterButton: {
    height: "30px",
    width: "50px",
    backgroundColor: "AliceBlue",
    border: "none",
    display: "inline-block",
    border: "1px solid CornflowerBlue",
    boxShadow: "1px 1px CornflowerBlue",
    margin: "5px 5px 0px 5px",
  },
});

const mapStateToProps = (state) => {
  const unreadNotificationsByType = getUnreadNotificationsByType(state);

  return {
    listNotifications: unreadNotificationsByType,
  };
};

const mapDispatchToProps = {
  fetchNotifications,
  markNotificationAsRead: markAsAread,
  setNotificationFilter,
};

// export default Notifications;

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
