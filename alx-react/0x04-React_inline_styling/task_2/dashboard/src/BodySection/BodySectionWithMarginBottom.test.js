import React from "react";
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import { StyleSheetTestUtils } from "aphrodite";

describe("Testing BodySectionWithMarginBottom Component",() => {

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it('checking that shallowing the component should render correctly a BodySection component and that the props are passed correctly to the child component', () => {
    let wrapper = shallow(<BodySectionWithMarginBottom title="test title" />);
		expect(wrapper.find("BodySection").exists()).toBe(true);
    wrapper = shallow(<BodySectionWithMarginBottom title="test title"><p>test children</p></BodySectionWithMarginBottom>)
		expect(wrapper.find("BodySection").props().title).toBe('test title');
  });
});
