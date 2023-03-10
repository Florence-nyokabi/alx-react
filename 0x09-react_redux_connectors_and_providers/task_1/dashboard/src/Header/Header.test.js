import { shallow, mount } from "enzyme";
import React from "react";
import Header from "./Header";
import { StyleSheetTestUtils } from "aphrodite";
import AppContext, { user, logOut } from "../App/AppContext";

describe("<Header />", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("Header renders without crashing", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.exists()).toEqual(true);
  });
  it("Verify that the components render img", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.update();
    expect(wrapper.find("div img")).toHaveLength(1);
  });
  it("Verify that the components render h1", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.update();
    expect(wrapper.find("div h1")).toHaveLength(1);
  });

  it("mounts the Header component with a default context value. The logoutSection is not created", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find("#logoutSection")).toHaveLength(0);
  });

  it("mounts the Header component with a user defined (isLoggedIn is true and an email is set). The logoutSection is created", () => {
    const wrapper = mount(
      <AppContext.Provider
        value={{ user: { ...user, isLoggedIn: true }, logOut }}
      >
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find("#logoutSection")).toHaveLength(1);
  });

  it("mounts the Header component with a user defined (isLoggedIn is true and an email is set) and the logOut is linked to a spy. Verify that clicking on the link is calling the spy", () => {
    const logOutSpy = jest.fn();

    const wrapper = mount(
      <AppContext.Provider
        value={{
          user: {
            email: "Larry@hudson.com",
            password: "123456789",
            isLoggedIn: true,
          },
          logOut: logOutSpy,
        }}
      >
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find("#logoutSection")).toHaveLength(1);
    wrapper.find("#logoutSection span").simulate("click");

    expect(logOutSpy).toHaveBeenCalled();

    jest.restoreAllMocks();
  });
});
