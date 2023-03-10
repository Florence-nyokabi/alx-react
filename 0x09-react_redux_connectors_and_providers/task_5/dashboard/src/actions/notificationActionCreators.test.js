import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  SET_LOADING_STATE,
  FETCH_NOTIFICATIONS_SUCCESS,
  NotificationTypeFilters,
} from "./notificationActionTypes";

import {
  markAsAread,
  setNotificationFilter,
  setLoadingState,
  setNotifications,
  fetchNotifications,
} from "./notificationActionCreators";

describe("action creators tests", function () {
  it("returns correct action for markAsRead", function () {
    const expectedReturn = {
      type: MARK_AS_READ,
      index: 1,
    };

    const result = markAsAread(1);

    expect(result).toEqual(expectedReturn);
  });

  it("returns correct action for setNotificationFilter", function () {
    const expectedReturn = {
      type: SET_TYPE_FILTER,
      filter: "DEFAULT",
    };

    const result = setNotificationFilter(NotificationTypeFilters.DEFAULT);

    expect(result).toEqual(expectedReturn);
  });
  it("returns correct action for setLoadingState", function () {
    const expectedReturn = {
      type: SET_LOADING_STATE,
      loading: true,
    };

    const result = setLoadingState(true);

    expect(result).toEqual(expectedReturn);
  });
  it("returns correct action for setNotifications", function () {
    const data = { 1: { a: "Hello" }, 2: { b: "There" } };

    const expectedReturn = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data,
    };

    const result = setNotifications(data);

    expect(result).toEqual(expectedReturn);
  });
});
