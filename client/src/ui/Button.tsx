import * as React from 'react';

import Spinner from './Spinner';

interface ButtonProps {
	labelText: string;
	disabled?: boolean;
	active?: boolean;
	onClick: any;
}

export default class Button extends React.Component<ButtonProps, {}> {
	render() {
		let spinner: JSX.Element = <span />;
		if (this.props.active) {
			spinner = <Spinner />;
		}

		return (
			<button className="ui button" disabled={!!this.props.disabled} onClick={this.props.onClick}>
				{spinner}
				{this.props.labelText}
			</button>
		);
	}
}
