import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import { shallow } from "enzyme";

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
  });
  it("should render Notifications component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Notifications />)).toBe(true);
  });
  it("should render Header component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Header />)).toBe(true);
  });
  it("should render Login Component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Login />)).toBe(true);
  });
  it("should render Footer component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Footer />)).toBe(true);
  });
});
