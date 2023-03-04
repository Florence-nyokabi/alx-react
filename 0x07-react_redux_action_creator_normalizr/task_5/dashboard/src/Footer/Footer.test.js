import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { user, logOut, AppContext } from '../App/AppContext';

describe('<Footer />', () => {
  it('render without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists());
  });
  /*
  it('paragraph and content', () => {
    expect(wrapper.find('footer p')).toHaveLength(1);
    expect(wrapper.find('footer p').text()).toContain('Copyright');
  });
*/
  it('logged out within the context', () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user, logOut }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('footer a')).toHaveLength(0);
  });
});
