import { shallow } from "enzyme";
import React from "react";
import Login from "./Login";
import { StyleSheetTestUtils } from "aphrodite";

describe("<Login />", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("Login renders without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("Verify that the components render 3 input", () => {
    const wrapper = shallow(<Login />);
    wrapper.update();
    expect(wrapper.find("div input")).toHaveLength(3);
  });
  it("Verify that the components render 2 label", () => {
    const wrapper = shallow(<Login />);
    wrapper.update();
    expect(wrapper.find("div label")).toHaveLength(2);
  });

  it("Verify that the components render 2 label", () => {
    const wrapper = shallow(<Login />);
    const submitInput = wrapper.find("form input[type='submit']");

    expect(submitInput).toHaveLength(1);
    expect(submitInput.prop("disabled")).toEqual(true);
  });

  it("Verify that the components render 2 label", () => {
    const wrapper = shallow(<Login />);
    const emailInput = wrapper.find("#email");
    const passwordInput = wrapper.find("#password");

    emailInput.simulate("change", {
      target: { name: "email", value: "Larry@email.com" },
    });

    let submitInput = wrapper.find("form input[type='submit']");

    expect(submitInput.prop("disabled")).toEqual(true);

    passwordInput.simulate("change", {
      target: { name: "password", value: "123456789" },
    });

    submitInput = wrapper.find("form input[type='submit']");
    expect(submitInput.prop("disabled")).toEqual(false);
  });
});
