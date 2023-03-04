import React from "react";
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe("Testing BodySection Component",() => {
  it(' checking that shallowing the component should render correctly the children and one h2 element', () => {
    const wrapper = shallow(<BodySection title="test title"><p>test children node</p></BodySection> );
    const h = wrapper.find('h2').text();
    const p = wrapper.find('p').text();
    expect(h).toEqual("test title");
    expect(p).toEqual("test children node");
    expect(wrapper.containsAllMatchingElements([h, p])).toEqual(true);
  });
});
