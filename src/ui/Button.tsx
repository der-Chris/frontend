import * as React from 'react';
import * as classnames from 'classnames';

import Spinner from './Spinner';

interface Props {
	labelText: string;
	disabled?: boolean;
	active?: boolean;
	onClick: any;
}

export default class Button extends React.Component<Props, {}> {
	render() {
		return (
			<button className={classnames('ui button btn btn-primary', { 'disabled': !!this.props.disabled })}
				disabled={!!this.props.disabled}
				onClick={this.props.onClick}>
				
				<Spinner visibile={this.props.active} />
				{this.props.labelText}
			</button>
		);
	}
}
