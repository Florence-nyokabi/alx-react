import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

function Notifications({ displayDrawer, listNotifications }) {
  return (
    <>
      <div className="menuItem">
        <p>Your notifications</p>
      </div>
      {displayDrawer ? (
        <div className="Notifications">
          <button
            style={{
              color: "#3a3a3a",
              fontWeight: "bold",
              background: "none",
              border: "none",
              fontSize: "15px",
              position: "absolute",
              right: "3px",
              top: "3px",
              cursor: "pointer",
              outline: "none",
            }}
            aria-label="Close"
            onClick={(e) => {
              console.log("Close button has been clicked");
            }}
          >
            <img src={closeIcon} alt="close icon" width="10px" />
          </button>
          {listNotifications.length != 0 ? <p>Here is the list of notifications</p> : null}
          <ul>
            {listNotifications.length == 0 ? <NotificationItem type="default" value="No new notification for now" /> : null}
            {listNotifications.map((val, idx) => {
              return <NotificationItem type={val.type} value={val.value} html={val.html} key={val.id} />;
            })}
          </ul>
        </div>
      ) : null}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
