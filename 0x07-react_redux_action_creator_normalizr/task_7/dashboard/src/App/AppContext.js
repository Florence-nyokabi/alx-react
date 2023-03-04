import React from 'react';

export const user = {
  email: '',
  password: '',
  isLoggedIn: false,
};

export const logOut = () => {};

export const AppContext = React.createContext({ user, logOut });
