import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from './notificationActionTypes';

import {
  markAsAread,
  setNotificationFilter,
} from './notificationActionCreators';

describe('action creators', () => {
  it('markAsRead', () => {
    const data = {
      type: MARK_AS_READ,
      index: 1,
    };
    const result = markAsAread(1);

    expect(result).toEqual(data);
  });

  it('setNotificationFilter', () => {
    const data = {
      type: SET_TYPE_FILTER,
      filter: 'DEFAULT',
    };
    const result = setNotificationFilter(NotificationTypeFilters.DEFAULT);

    expect(result).toEqual(data);
  });
});
