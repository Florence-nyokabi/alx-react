import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const NotificationItem = React.memo(function NotificationItem({
  type,
  value,
  html,
  markAsRead,
  id,
}) {
  let listItem;

  let typeStyle = css(type === "urgent" ? styles.urgent : styles.default);

  if (value) {
    if (type === "noNotifications") {
      listItem = (
        <li
          className={css(styles.noNotifications)}
          data-notification-type={type}
        >
          {value}
        </li>
      );
    } else {
      listItem = (
        <li
          className={typeStyle}
          data-notification-type={type}
          onClick={() => markAsRead(id)}
        >
          {value}
        </li>
      );
    }
  } else {
    listItem = (
      <li
        className={typeStyle}
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={() => markAsRead(id)}
      ></li>
    );
  }

  return listItem;
});

NotificationItem.defaultProps = {
  type: "default",
  value: "",
  html: {},
  markAsRead: () => {},
  id: NaN,
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const screenSize = {
  small: "@media screen and (max-width: 900px)",
};

const listItemSmall = {
  listStyle: "none",
  borderBottom: "1px solid black",
  padding: "10px 8px",
  fontSize: "20px",
};

const styles = StyleSheet.create({
  default: {
    color: "blue",
    ":hover": {
      cursor: "pointer",
    },
    [screenSize.small]: listItemSmall,
  },

  urgent: {
    color: "red",
    ":hover": {
      cursor: "pointer",
    },
    [screenSize.small]: listItemSmall,
  },

  noNotifications: {
    color: "black",
    [screenSize.small]: listItemSmall,
  },
});

export default NotificationItem;
