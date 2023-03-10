import rootReducer from "./rootReducer";
import { combineReducers } from "redux";
import { Map } from "immutable";

describe("uiReducer tests", function () {
  it("verifies the state returned by the uiReducer function equals the initial state when no action is passed", function () {
    const expectedState = {
      courses: Map({}),
      notifications: Map({}),
      ui: Map({}),
    };

    const reducer = combineReducers(rootReducer);

    const state = reducer(undefined, { type: "RANDOM" });

    for (const st in expectedState) {
      expect(state[st]).toBeTruthy();
      expect(typeof expectedState[st]).toEqual(typeof state[st]);
    }
  });
});
