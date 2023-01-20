import React from "react";
import { shallow } from "enzyme";
import WithLogging from "./WithLogging";

const TestComponent = () => <p>Test Component</p>;

describe("WithLogging tests", () => {
  it("should call console.log on mount and dismount", () => {
    const spy = jest.spyOn(console, "log").mockImplementation();
    const NewComponent = WithLogging(TestComponent);
    const wrapper = shallow(<NewComponent />);

    expect(spy).toBeCalledTimes(1);
    wrapper.unmount();
    expect(spy).toBeCalledTimes(2);
    spy.mockRestore();
  });

  it("should log out the right message on mount and on unmount", () => {
    const spy = jest.spyOn(console, "log").mockImplementation();
    const NewComponent = WithLogging(TestComponent);
    const wrapper = shallow(<NewComponent />);

    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith("Component TestComponent is mounted");
    wrapper.unmount();
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toBeCalledWith("Component Test is going to unmount");
    spy.mockRestore();
  });
});
