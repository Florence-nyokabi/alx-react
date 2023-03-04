import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<CourseListRow />', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<CourseListRow textFirstCell='test' />);
    expect(wrapper.exists());
  });

  it('renders one cell', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell='test' />
    );
    const th = wrapper.find('th');
    expect(wrapper.exists());
    expect(th.exists());
    expect(th).toHaveLength(1);
    expect(th.prop('colSpan')).toEqual('2');
  });

  it('renders two cells', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell='test'
        textSecondCell='second'
      />
    );
    const th = wrapper.find('th');
    expect(wrapper.exists());
    expect(th.exists());
    expect(th).toHaveLength(2);
    expect(th.first().text()).toEqual('test');
    expect(th.at(1).text()).toEqual('second');
  });

  it('renders two td', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell='test'
        textSecondCell='second'
      />
    );
    const tr = wrapper.find('tr');
    expect(wrapper.exists());
    expect(tr.exists());
    expect(tr).toHaveLength(1);
    expect(tr.children('td')).toHaveLength(2);
  });
});
