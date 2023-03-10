import coursesNormalizer from "./courses";

describe("courses normalizer tests", function () {
  it("Should normalize data", function () {
    const courses = [
      {
        id: 1,
        name: "ES6",
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        credit: 40,
      },
    ];

    const expectedResult = {
      1: { id: 1, name: "ES6", credit: 60 },
      2: { id: 2, name: "Webpack", credit: 20 },
      3: { id: 3, name: "React", credit: 40 },
    };

    const normalizedData = coursesNormalizer(courses);

    expect(normalizedData).toEqual(expectedResult);
  });
});
