import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';


describe('Testing <Header /> Component', () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<Header />);
  });

  it("Renders with out crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("Render an h1 tag", () => {
    expect(wrapper.find('h1')).toBeDefined();
  });

  it("Render an img tag", () => {
    expect(wrapper.find('img')).toBeDefined();
  });

  it(`Tests that logoutSection is not rendered with default context values`, () => {
		const context = {
			user: {
				email: '',
				password: '',
				isLoggedIn: false
			},
			logOut: jest.fn()
		}

		wrapper = mount(
			<AppContext.Provider value={context}>
				<Header />
			</AppContext.Provider>
		)

		expect(wrapper.find('#logoutSection').length).toBe(0);
		expect(wrapper.find('#logoutSection').exists()).toBe(false);
		wrapper.unmount();
	})

	it(`Tests that logoutSection is rendered with context values`, () => {
		const context = {
			user: {
				email: 'test@test.com',
				password: '123',
				isLoggedIn: true
			},
			logOut: jest.fn()
		}

		wrapper = mount(
			<AppContext.Provider value={context}>
				<Header />
			</AppContext.Provider>
		)

		expect(wrapper.find('#logoutSection').length).toBe(1);
		expect(wrapper.find('#logoutSection').exists()).toBe(true);
		wrapper.unmount();
	})

	it(`Verifies that the logOut function is called when clicking on logOut link`, () => {
		const context = {
			user: {
				email: 'test@test.com',
				password: '123',
				isLoggedIn: true
			},
			logOut: jest.fn()
		}

		const spy = jest.spyOn(context, 'logOut');

		wrapper = mount(
			<AppContext.Provider value={context}>
				<Header />
			</AppContext.Provider>
		)

		wrapper.find('a').simulate('click');

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledTimes(1);
		wrapper.unmount();
	})
});
