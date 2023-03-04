import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from './uiActionCreators';

describe('action creators', () => {
  it('login', () => {
    const user = { email: 'account@domain.extension', password: 123456789 };
    const data = { type: LOGIN, user };
    const result = login(user.email, user.password);

    expect(result).toEqual(data);
  });

  it('logout', () => {
    const data = { type: LOGOUT };
    const result = logout();

    expect(result).toEqual(data);
  });

  it('displayNotificationDrawer', () => {
    const data = { type: DISPLAY_NOTIFICATION_DRAWER };
    const result = displayNotificationDrawer();

    expect(result).toEqual(data);
  });

  it('hideNotificationDrawer', () => {
    const data = { type: HIDE_NOTIFICATION_DRAWER };
    const result = hideNotificationDrawer();

    expect(result).toEqual(data);
  });
});
