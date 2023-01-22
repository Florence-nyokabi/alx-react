/**
 * @jest-environment jsdom
 */
import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { shallow, mount } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import { AppContext, user, logOut } from "./AppContext";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("rendering components", () => {
  it("renders App component without crashing", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
  });

  it("contains Notifications component", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Notifications)).toHaveLength(1);
  });

  it("contains Header component", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.contains(<Header />)).toBe(true);
  });

  it("contains Login component", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it("contains Footer component", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.contains(<Footer />)).toBe(true);
  });

  it("checks CourseList is not rendered", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.contains(<CourseList />)).toBe(false);
  });
});

describe("when isLogged in is true", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().user).toEqual(user);

  it("checks Login is not rendered", () => {
    expect(wrapper.contains(<Login />)).toBe(false);
  });

  it("checks CourseList is rendered", () => {
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  it(`Tests that the logIn function updates user's state correctly`, () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );

    const myUser = {
      email: "testy@gmail.com",
      password: "testy",
      isLoggedIn: true,
    };

    expect(wrapper.state().user).toEqual(user);
    const instance = wrapper.instance();
    instance.logIn(myUser.email, myUser.password);
    expect(wrapper.state().user).toEqual(myUser);
    wrapper.unmount();
  });

  it(`Tests that the logOut function updates user's state correctly`, () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );

    const myUser = {
      email: "testy@gmail.com",
      password: "testy",
      isLoggedIn: true,
    };

    expect(wrapper.state().user).toEqual(user);
    const instance = wrapper.instance();
    instance.logOut();
    expect(wrapper.state().user).toEqual(user);
    wrapper.unmount();
  });
});

describe("testing state of App.js", () => {
  it("displayDrawer initial value should be set to false", () => {
    const wrapper = mount(<App />);

    expect(wrapper.state().displayDrawer).toBe(false);
  });

  it("should set displayDrawer to true after calling handleDisplayDrawer", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();

    expect(wrapper.state().displayDrawer).toBe(true);
  });

  it("should set displayDrawer to false after calling handleHideDrawer", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleHideDrawer();

    expect(wrapper.state().displayDrawer).toBe(false);
  });
});
