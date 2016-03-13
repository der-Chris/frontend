import * as React from 'react';

interface ButtonProps {
	labelText: string;
	onClick: any;
}

export default class Button extends React.Component<ButtonProps, {}> {
	render() {
		return (
			<button className="ui button" onClick={this.props.onClick}>
				{this.props.labelText}
			</button>
		);
	}
}
