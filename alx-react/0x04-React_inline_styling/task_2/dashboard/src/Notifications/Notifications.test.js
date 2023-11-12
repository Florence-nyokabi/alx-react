import React from 'react';
import { jest } from '@jest/globals';
import { shallow, mount } from 'enzyme';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';
import { StyleSheetTestUtils } from 'aphrodite';

describe("Testing the <Notifications /> Component", () => {
  
  let wrapper;
  const listNotifications = [
    {id: 1, value: "New course available", type: "default"},
    {id: 2, value: "New resume available", type: "urgent"},
    {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
  ];

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<Notifications />);
  });

  it("<Notifications /> is rendered without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("<Notifications /> renders NotificationItems", () => {
    wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find('NotificationItem')).not.toHaveLength(0);
  });

  it("<Notifications /> render the text 'Here is the list of notifications'", () => {
    wrapper.setProps({displayDrawer: true, listNotifications: [{id: 1, value: "New course available", type: "default"}]});
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toEqual(true);
  });
});

describe("Testing <Notification displayDrawer={true}/> ", () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<Notifications displayDrawer={true}/>);
  });

  it("div.Notifications is being displayed when displayDrawer is true", () => {
    expect(wrapper.find('button')).toHaveLength(1);
  });
});

describe("Testing <Notification displayDrawer={true} listNotifications={[...]}/> ", () => {
  let wrapper;
  const listNotifications = [
    {id: 1, value: "New course available", type: "default"},
    {id: 2, value: "New resume available", type: "urgent"},
    {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
  ];

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
  });

  it("verify that when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem", () => {
    expect(wrapper.find("NotificationItem")).toHaveLength(3);
    expect(wrapper.find("NotificationItem").first().props().value).toEqual('New course available');
  });
});

describe("Testing markAsRead method in the notification class Component", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it("Check that when calling the function markAsRead on an instance of the component, the spy is being called with the right message", () => {
    const listNotifications = [
      {id: 1, value: "New course available", type: "default"},
      {id: 2, value: "New resume available", type: "urgent"},
      {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
    ];
    console.log = jest.fn();
    const wrapper = mount(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
    const mock = jest.spyOn(console, 'log');
    const noti = wrapper.find('li').first();
    noti.simulate('click');
    expect(mock).toBeCalledWith("Notification 1 has been marked as read");
    mock.mockRestore();
    jest.restoreAllMocks();
  });
});

describe("Testing the notification class Component re-rendering", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it("verify that when updating the props of the component with the same list, the component doesnt rerender", () => {
    const listNotifications = [
      {id: 1, value: "New course available", type: "default"},
      {id: 2, value: "New resume available", type: "urgent"},
      {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
    ];
    const listNotifications2 = [
      {id: 1, value: "New course available changed", type: "default"},
      {id: 2, value: "New resume available", type: "urgent"},
      {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
    ];
    console.log = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
    wrapper.setProps({listNotifications: listNotifications});
    expect(wrapper.find('NotificationItem').length).toBe(3);
    expect(wrapper.find('NotificationItem').first().props().value).toEqual("New course available");
  });

  it("verify that when updating the props of the component with a longer list, the component does rerender", () => {
    const listNotifications = [
      {id: 1, value: "New course available", type: "default"},
      {id: 2, value: "New resume available", type: "urgent"},
      {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
    ];
    const listNotifications2 = [
      {id: 1, value: "New course available", type: "default"},
      {id: 2, value: "New course available2", type: "default"},
      {id: 3, value: "New resume available", type: "urgent"},
      {id: 4, html: {__html: getLatestNotification()}, type: "urgent"},
    ];
    console.log = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
    wrapper.setProps({listNotifications: listNotifications2});
    expect(wrapper.find("NotificationItem").at(1).props().value).toEqual("New course available2");
    expect(wrapper.find("NotificationItem").length).toBe(4);
  });
});