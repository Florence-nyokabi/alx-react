import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

describe("Testing <NotificationItem />", () => {
  let  wrapper;
  
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it("<NotificationItem /> renders without crashing", () => {
    wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists());
  });

  it("<NotificationItem />  renders the correct html by passing dummy type and value props,", () => {
    wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find("li").text()).toBe("test");
    expect(wrapper.find("li").prop("data-notification-type")).toBe("default");
  });
});
