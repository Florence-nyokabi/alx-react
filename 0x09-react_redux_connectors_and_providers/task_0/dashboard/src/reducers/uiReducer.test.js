import uiReducer, { initialState } from "./uiReducer";
import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";

describe("uiReducer tests", function () {
  it("verifies the state returned by the uiReducer function equals the initial state when no action is passed", function () {
    const state = uiReducer(undefined, {});

    expect(state.toJS()).toEqual(initialState);
  });
  it("verifies the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed", function () {
    const state = uiReducer(undefined, { type: "SELECT_COURSE" });

    expect(state.toJS()).toEqual(initialState);
  });
  it("verifies the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property", function () {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });

    expect(state.toJS()).toEqual({
      ...initialState,
      isNotificationDrawerVisible: true,
    });
  });
});
