import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';

describe("testing the <Login /> component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it("Login component renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("Login component renders 2 input tags", () => {
    expect(wrapper.find("input")).toHaveLength(2);
  });

  it("Login component renders 2 label tags", () => {
    expect(wrapper.find("label")).toHaveLength(2);
  });
});
