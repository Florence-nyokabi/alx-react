import notificationReducer, {
  initialNotificationState,
} from './notificationReducer';

import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

describe('courseReducer', function () {
  it('initial state', function () {
    const state = notificationReducer(undefined, {});
    expect(state).toEqual(initialNotificationState);
  });
  /*
  it('FETCH_NOTIFICATIONS_SUCCESS', function () {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        {
          id: 1,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          type: 'urgent',
          value: 'New data available',
        },
      ],
    };

    const expectedData = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available',
        },
      ],
    };

    const state = notificationReducer(undefined, action);
    expect(state).toEqual(expectedData);
  });
*/
  it('MARK_AS_READ', function () {
    const initialState = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available',
        },
      ],
    };

    const action = {
      type: MARK_AS_READ,
      index: 2,
    };

    const expectedData = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          isRead: true,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available',
        },
      ],
    };

    const state = notificationReducer(initialState, action);
    expect(state).toEqual(expectedData);
  });
  it('SET_TYPE_FILTER', function () {
    const initialState = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available',
        },
      ],
    };

    const action = {
      type: SET_TYPE_FILTER,
      filter: 'URGENT',
    };

    const expectedData = {
      filter: 'URGENT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available',
        },
      ],
    };

    const state = notificationReducer(initialState, action);
    expect(state).toEqual(expectedData);
  });
});
