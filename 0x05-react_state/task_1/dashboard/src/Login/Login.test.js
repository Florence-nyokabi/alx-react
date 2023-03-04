import React from 'react';
import Login from './Login';
import { mount, shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

describe("testing the <Login /> component", () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<Login />);
  });

  it("Login component renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("Login component renders 2 input tags and 2 label tags", () => {
    expect(wrapper.find("input")).toHaveLength(3);
    expect(wrapper.find("label")).toHaveLength(2);

  });
});

describe("Test the <Login /> component with state", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Login />);
  });

  it("Verify that the submit button is disabled by default", () => {
    expect(wrapper.state().enableSubmit).toBe(false);
  });
});