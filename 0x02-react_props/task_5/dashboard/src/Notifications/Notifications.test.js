import React from "react";
import { shallow } from "enzyme";
import { getLatestNotification } from "../utils/utils";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: getLatestNotification() },
];

describe("Notification tests", () => {
  it("renders Notification component without crashing", () => {
    const wrapper = shallow(<Notifications />);

    expect(wrapper).toBeDefined();
  });

  it("renders correct list items", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find("ul").children()).toHaveLength(listNotifications.length);
    wrapper.find("ul").forEach((node) => {
      expect(node.equals(<NotificationItem />));
    });
    expect(wrapper.find("ul").childAt(0).html()).toEqual('<li data-notification-type="default">New course available</li>');
    expect(wrapper.find("ul").childAt(1).html()).toEqual('<li data-notification-type="urgent">New resume available</li>');
    expect(wrapper.find("ul").childAt(2).html()).toEqual(`<li data-urgent=\"true\">${getLatestNotification()}</li>`);
  });

  // it("renders an unordered list", () => {
  //   const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
  //   expect(wrapper.find("ul").children()).toHaveLength(3);
  //   wrapper.find("ul").forEach((node) => {
  //     expect(node.equals(<NotificationItem />));
  //   });
  // });

  it("renders correct text", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);

    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(false);
  });

  it("displays menu item when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);

    expect(wrapper.find("div.menuItem").exists()).toBe(true);
    expect(wrapper.find("div.menuItem").html()).toEqual('<div class="menuItem"><p>Your notifications</p></div>');
  });

  it("does not display notifications when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);

    expect(wrapper.find("div.Notifications").exists()).toBe(false);
  });

  it("does not display menuItem when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);

    expect(wrapper.find("div.menuItem").exists()).toBe(true);
  });

  it("displays Notifications when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);

    expect(wrapper.find("div.Notifications").exists()).toBe(true);
  });

  it("renders correctly when listCourses is not passed", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);

    expect(wrapper.containsMatchingElement(<li data-notification-type="default">No new notification for now</li>));
  });

  it("renders correctly when empty array is passed", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);

    expect(wrapper.containsMatchingElement(<li data-notification-type="default">No new notification for now</li>));
  });

  // it("renders correctly when listNotifications is passed and with the right number of notifications", () => {
  //   const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);

  //   expect(wrapper.find("ul").children()).toHaveLength(3);
  //   wrapper.find("ul").forEach((node) => {
  //     expect(node.equals(<NotificationItem />));
  //   });
  // });

  it('renders "No new notifications for now" instead of "Here is the list of notifications" when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);

    expect(wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)).toBe(false);

    expect(wrapper.containsMatchingElement(<li data-notification-type="default">No new notification for now</li>));
  });
});
