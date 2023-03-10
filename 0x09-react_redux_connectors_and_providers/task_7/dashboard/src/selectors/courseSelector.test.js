import { Map, fromJS } from "immutable";
import { getListCourses } from "./courseSelector";

describe("Course selectors tests", function () {
  it("verify that the selector is working correctly", function () {
    const state = {
      courses: fromJS([
        {
          id: 1,
          name: "ES6",
          isSelected: false,
          credit: 60,
        },
        {
          id: 2,
          name: "Webpack",
          isSelected: false,
          credit: 20,
        },
        {
          id: 3,
          name: "React",
          isSelected: false,
          credit: 40,
        },
      ]),
    };

    const expectedResult = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40,
      },
    ];

    const selected = getListCourses(state);

    expect(selected.toJS()).toEqual(expectedResult);
  });
});
