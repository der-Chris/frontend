import * as React from 'react';

interface ButtonProps {
	labelText: string;
	disabled?: boolean;
	onClick: any;
}

export default class Button extends React.Component<ButtonProps, {}> {
	render() {
		return (
			<button className="ui button" disabled={!!this.props.disabled} onClick={this.props.onClick}>
				{this.props.labelText}
			</button>
		);
	}
}
