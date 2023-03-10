import {
  selectCourse,
  unSelectCourse,
  setCourses,
  fetchCourses,
} from "./courseActionCreators";

import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
} from "./courseActionTypes";

import fetchMock from "fetch-mock";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("action creators tests", function () {
  it("selectCourse should return: { type: SELECT_COURSE, index: 1 }", function () {
    const result = selectCourse(1);

    expect(result).toEqual({ type: SELECT_COURSE, index: 1 });
  });
  it("unSelectCourse should return: { type: UNSELECT_COURSE, index: 1 }", function () {
    const result = unSelectCourse(1);

    expect(result).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });
  it("unSelectCourse should return: { type: UNSELECT_COURSE, index: 1 }", function () {
    const result = unSelectCourse(1);

    expect(result).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });
  it("verify that the fetch is working correctly", function () {
    const store = mockStore({});
    fetchMock.restore();

    fetchMock.get("./courses.json", "{}");

    return store.dispatch(fetchCourses()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(setCourses({}));
    });
  });
});
