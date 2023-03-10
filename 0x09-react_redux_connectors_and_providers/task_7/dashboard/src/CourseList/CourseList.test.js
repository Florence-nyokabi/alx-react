import { shallow } from "enzyme";
import React from "react";
import { CourseList } from "./CourseList";
import { StyleSheetTestUtils } from "aphrodite";

describe("<CourseList />", () => {
  let listCourses;

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("CourseList renders without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toEqual(true);
  });

  describe("CourseList with list of courses", () => {
    beforeEach(() => {
      listCourses = [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "Webpack", credit: 20 },
        { id: 3, name: "React", credit: 40 },
      ];
    });

    it("it renders the 5 different rows", () => {
      const wrapper = shallow(<CourseList listCourses={listCourses} />);
      wrapper.update();
      const item = wrapper.find("CourseListRow");

      expect(item).toHaveLength(5);

      expect(item.at(0).prop("textFirstCell")).toEqual("Available courses");
      expect(item.at(0).prop("isHeader")).toEqual(true);

      expect(item.at(1).prop("textFirstCell")).toEqual("Course name");
      expect(item.at(1).prop("textSecondCell")).toEqual("Credit");
      expect(item.at(1).prop("isHeader")).toEqual(true);

      expect(item.at(2).prop("textFirstCell")).toEqual("ES6");
      expect(item.at(2).prop("textSecondCell")).toEqual(60);
      expect(item.at(2).prop("isHeader")).toEqual(false);

      expect(item.at(3).prop("textFirstCell")).toEqual("Webpack");
      expect(item.at(3).prop("textSecondCell")).toEqual(20);
      expect(item.at(3).prop("isHeader")).toEqual(false);

      expect(item.at(4).prop("textFirstCell")).toEqual("React");
      expect(item.at(4).prop("textSecondCell")).toEqual(40);
      expect(item.at(4).prop("isHeader")).toEqual(false);
    });
  });

  describe("CourseList without listCourses or empty listCourses", () => {
    beforeEach(() => {
      listCourses = [];
    });

    it("it renders the 3 rows without listCourses  without listCourses", () => {
      const wrapper = shallow(<CourseList fetchCourses={() => {}} />);
      expect(wrapper.exists());
      wrapper.update();
      const item = wrapper.find("CourseListRow");

      expect(item).toHaveLength(3);
      expect(item.at(0).prop("textFirstCell")).toEqual("Available courses");
      expect(item.at(0).prop("isHeader")).toEqual(true);

      expect(item.at(1).prop("textFirstCell")).toEqual("Course name");
      expect(item.at(1).prop("textSecondCell")).toEqual("Credit");
      expect(item.at(1).prop("isHeader")).toEqual(true);

      expect(item.at(2).prop("textFirstCell")).toEqual(
        "No course available yet"
      );
      expect(item.at(2).prop("textSecondCell")).toEqual(null);
      expect(item.at(2).prop("isHeader")).toEqual(false);
    });

    it("it renders the 3 rows with listCourses empty", () => {
      const wrapper = shallow(<CourseList fetchCourses={() => {}} />);
      expect(wrapper.exists());
      wrapper.update();
      const item = wrapper.find("CourseListRow");

      expect(item).toHaveLength(3);
      expect(item.at(0).prop("textFirstCell")).toEqual("Available courses");
      expect(item.at(0).prop("isHeader")).toEqual(true);

      expect(item.at(1).prop("textFirstCell")).toEqual("Course name");
      expect(item.at(1).prop("textSecondCell")).toEqual("Credit");
      expect(item.at(1).prop("isHeader")).toEqual(true);

      expect(item.at(2).prop("textFirstCell")).toEqual(
        "No course available yet"
      );
      expect(item.at(2).prop("textSecondCell")).toEqual(null);
      expect(item.at(2).prop("isHeader")).toEqual(false);
    });

    it("verify that the function fetchCourses is called when the component is mounted", () => {
      const fetchCourses = jest.fn();

      const wrapper = shallow(<CourseList fetchCourses={fetchCourses} />);

      expect(fetchCourses).toHaveBeenCalled();

      jest.restoreAllMocks();
    });

    it("verify that the two actions are correctly dispatched when the onChangeRow function is called", () => {
      const fetchCourses = jest.fn();
      const selectCourse = jest.fn();
      const unSelectCourse = jest.fn();

      const wrapper = shallow(
        <CourseList
          fetchCourses={fetchCourses}
          selectCourse={selectCourse}
          unSelectCourse={unSelectCourse}
        />
      );

      const instance = wrapper.instance();

      instance.onChangeRow("1", true);

      expect(selectCourse).toHaveBeenCalled();

      instance.onChangeRow("1", false);

      expect(unSelectCourse).toHaveBeenCalled();

      jest.restoreAllMocks();
    });
  });
});
