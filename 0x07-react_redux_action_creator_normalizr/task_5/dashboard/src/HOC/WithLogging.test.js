import React from 'react';
import { shallow, mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('<WithLogging />', () => {
  it('render', () => {
    console.log = jest.fn();
    const HOC = WithLogging(() => <p />);
    const wrapper = shallow(<HOC />);
    expect(wrapper.exists());
  });
  /*
  it('on mount and on unmount with pure html', () => {
    console.log = jest.fn();
    const HOC = WithLogging(() => <p />);
    const wrapper = mount(<HOC />);
    expect(wrapper.exists()).toEqual(true);
    expect(console.log).toHaveBeenNthCalledWith(
      1,
      `Component Component is mounted`
    );
    wrapper.unmount();
    expect(console.log).toHaveBeenNthCalledWith(
      2,
      `Component Component is going to unmount`
    );
    jest.restoreAllMocks();
  });
*/
  it('render login', () => {
    console.log = jest.fn();
    const HOC = WithLogging(Login);
    const wrapper = shallow(<HOC />);
    expect(wrapper.exists());
  });
  /*
  it('mount and on unmount with login. ', () => {
    console.log = jest.fn();
    const HOC = WithLogging(Login);
    const wrapper = mount(<HOC />);
    expect(wrapper.exists()).toEqual(true);
    expect(console.log).toHaveBeenNthCalledWith(
      1,
      `Component Login is mounted`
    );
    wrapper.unmount();
    expect(console.log).toHaveBeenNthCalledWith(
      2,
      `Component Login is going to unmount`
    );
    jest.restoreAllMocks();
  });
*/
});
