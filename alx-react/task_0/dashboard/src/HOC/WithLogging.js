import React, { Component } from 'react'

const WithLogging = (WrappedComponent) => {
	const name = WrappedComponent.displayName || WrappedComponent.name || 'Component';

	class NewComponent extends Component {
		componentDidMount() {
			console.log(`Component ${name} is mounted`);
		}

		componentWillUnmount() {
			console.log(`Component ${name} is going to unmount`);
		}

		render() {
			return <WrappedComponent {...this.props}/>;
		}
	};
	NewComponent.displayName = `WithLogging(${name})`;
	return NewComponent;
}

export default WithLogging
