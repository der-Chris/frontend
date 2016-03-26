import * as React from 'react';

interface Props {
	onClick?: () => void;
	children?: JSX.Element
}

export default class Box extends React.Component<Props, {}> {
	render() {
		let classes = 'ui box';
		if (this.props.onClick) classes += ' clickable';

		return (
			<div className={classes} onClick={this.props.onClick}>
				{this.props.children}
			</div>
		);
	}
}