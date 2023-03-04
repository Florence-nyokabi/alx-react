import { Map, fromJS } from 'immutable';
import courseReducer, { initialCourseState } from './courseReducer';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';

import coursesNormalizer from '../schema/courses';

describe('courseReducer tests', function () {
  it('Tests that the default state returns an empty arr', function () {
    const state = courseReducer(undefined, {});

    expect(state).toEqual(Map(initialCourseState));
  });
  it('Tests that FETCH_COURSE_SUCCESS returns the data passed', function () {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        {
          id: 1,
          name: 'ES6',
          credit: 60,
        },
        {
          id: 2,
          name: 'Webpack',
          credit: 20,
        },
        {
          id: 3,
          name: 'React',
          credit: 40,
        },
      ],
    };

    const expectedData = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];

    const state = courseReducer(undefined, action);
    expect(state.toJS()).toEqual(coursesNormalizer(expectedData));
  });
  it('Tests that SELECT_COURSE returns the data with the right item updated', function () {
    const initialState = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];

    const action = {
      type: SELECT_COURSE,
      index: 2,
    };

    const expectedData = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: true,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];

    const state = courseReducer(
      fromJS(coursesNormalizer(initialState)),
      action
    );

    expect(state.toJS()).toEqual(coursesNormalizer(expectedData));
  });
  it('Tests that UNSELECT_COURSE returns the data with the right item updated', function () {
    const initialState = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: true,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];

    const action = {
      type: UNSELECT_COURSE,
      index: 2,
    };

    const expectedData = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];

    const state = courseReducer(
      fromJS(coursesNormalizer(initialState)),
      action
    );

    expect(state.toJS()).toEqual(coursesNormalizer(expectedData));
  });
});
