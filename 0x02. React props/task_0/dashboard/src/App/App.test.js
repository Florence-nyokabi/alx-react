import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
  });
  // it('should render a div with the class App-header', () => {
  // 	const component = shallow(<App />);

  // 	expect(component.find('.App-header')).toBeDefined();
  // });
  // it('should render a div with the class App-body', () => {
  // 	const component = shallow(<App />);

  // 	expect(component.find('.App-body')).toBeDefined();
  // });
  // it('should render a div with the class App-footer', () => {
  // 	const component = shallow(<App />);

  // 	expect(component.find('.App-footer')).toBeDefined();
  // });
});
