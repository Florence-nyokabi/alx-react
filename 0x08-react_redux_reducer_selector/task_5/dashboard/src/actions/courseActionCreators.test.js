import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('action creators', () => {
  it('selectCourse', () => {
    const result = selectCourse(1);
    expect(result).toEqual({ type: SELECT_COURSE, index: 1 });
  });

  it('unSelectCourse', () => {
    const result = unSelectCourse(1);
    expect(result).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });
});
