import React from "react";
import { NotificationsContainer } from "./NotificationsContainer";
import { shallow } from "enzyme";

describe("<NotificationsContainer />", () => {
  it("verify that the function fetchNotifications is called when the component is mounted", () => {
    const fetchNotifications = jest.fn();

    const wrapper = shallow(
      <NotificationsContainer fetchNotifications={fetchNotifications} />
    );

    expect(fetchNotifications).toHaveBeenCalled();

    jest.restoreAllMocks();
  });
});
