import * as React from 'react';

export default class Box extends React.Component<any, {}> {
	render() {
		return (
			<div className="ui box">
				{this.props.children}
			</div>
		);
	}
}
