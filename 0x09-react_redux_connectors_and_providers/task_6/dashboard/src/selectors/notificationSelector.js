export const filterTypeSelected = (state) => {
  return state.get("filter");
};
export const getNotifications = (state) => {
  return state.get("notifications");
};
export const getUnreadNotifications = (state) => {
  const notifications = state.notifications.get("messages");

  if (notifications) {
    const filtered = notifications
      .valueSeq()
      .filter((value) => value.get("isRead") === false);

    return filtered;
  }

  return notifications;
};
