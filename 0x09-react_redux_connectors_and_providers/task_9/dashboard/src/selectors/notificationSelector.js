import { createSelector } from "reselect";

export const filterTypeSelected = (state) => {
  return state.get("filter");
};
export const getNotifications = (state) => {
  return state.get("notifications");
};

const getNotificationsSelector = (state) => state.notifications;

export const getUnreadNotificationsByType = createSelector(
  getNotificationsSelector,
  (notifications) => {
    const messages = notifications.get("messages");
    const filter = notifications.get("filter");

    if (messages) {
      let filtered;

      if (filter === "URGENT") {
        filtered = messages
          .valueSeq()
          .filter(
            (value) =>
              value.get("isRead") === false && value.get("type") === "urgent"
          );
      } else {
        filtered = messages
          .valueSeq()
          .filter((value) => value.get("isRead") === false);
      }

      return filtered;
    }

    return messages;
  }
);
