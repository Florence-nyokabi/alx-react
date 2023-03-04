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

  it('render login', () => {
    console.log = jest.fn();
    const HOC = WithLogging(Login);
    const wrapper = shallow(<HOC />);
    expect(wrapper.exists());
  });
});
