import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchNotifications,
  markAsAread,
  setNotificationFilter,
} from "../actions/notificationActionCreators";
import { getUnreadNotificationsByType } from "../selectors/notificationSelector";
import Notifications from "./Notifications";
import PropTypes from "prop-types";

export class NotificationsContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    return <Notifications {...this.props}></Notifications>;
  }
}

NotificationsContainer.defaultProps = {
  displayDrawer: false,
  listNotifications: null,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
  fetchNotifications: () => {},
  setNotificationFilter: () => {},
};

NotificationsContainer.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.object,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
  setNotificationFilter: PropTypes.func,
};

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationsContainer);
