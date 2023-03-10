import { Map, fromJS } from "immutable";

import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  SET_LOADING_STATE,
} from "../actions/notificationActionTypes";

export const initialNotificationState = {
  notifications: {},
  filter: "DEFAULT",
  loading: false,
};

import notificationsNormalizer from "../schema/notifications";

const notificationReducer = (state = Map(initialNotificationState), action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedData = notificationsNormalizer(action.data);

      Object.keys(normalizedData.notifications).map((key) => {
        normalizedData.notifications[key].isRead = false;
      });

      return state.mergeDeep(normalizedData);

    case MARK_AS_READ:
      return state.setIn(
        ["notifications", String(action.index), "isRead"],
        true
      );

    case SET_TYPE_FILTER:
      return state.set("filter", action.filter);

    case SET_LOADING_STATE:
      return state.set("loading", action.loading);

    default:
      break;
  }
  return state;
};

export default notificationReducer;
