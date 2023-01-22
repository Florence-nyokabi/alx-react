import React from "react";

export const user = {
  email: "",
  password: "",
  isLoggedIn: false,
};

export function logOut() {
  user.isLoggedIn = false;
}

export const AppContext = React.createContext({
  user,
  logOut,
});
