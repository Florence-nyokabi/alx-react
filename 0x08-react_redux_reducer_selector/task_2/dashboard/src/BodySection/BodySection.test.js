import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<BodySection />', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('render without crashing', () => {
    const wrapper = shallow(<BodySection />);
    expect(wrapper.exists());
  });

  it('with children and heading', () => {
    const wrapper = shallow(
      <BodySection title='test title'>
        <p>test children node</p>
      </BodySection>
    );
    expect(wrapper.exists());
    const div = wrapper.find('.bodySection').first();
    const h2 = wrapper.find('h2');
    const p = wrapper.find('p');
    expect(div.exists());
    expect(h2.exists());
    expect(p.exists());
    expect(h2).toHaveLength(1);
    expect(h2.text()).toEqual('test title');
    expect(p).toHaveLength(1);
    expect(p.text()).toEqual('test children node');
  });
});
