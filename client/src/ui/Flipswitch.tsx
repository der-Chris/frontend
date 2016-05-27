import * as React from 'react';

interface Props {
	checked: boolean;
	disabled?: boolean;
	labelText: string;
	onLabel: string;
	offLabel: string;
	onChange: any;
}

export default class Flipswitch extends React.Component<Props, {}> {
	render() {
		return (
			<div className="ui flipswitch">
				<label className="text" htmlFor="flipswitch">{this.props.labelText}:</label>

				<input type="checkbox" name="flipswitch" id="flipswitch"
					disabled={!!this.props.disabled}
					checked={this.props.checked}
					onChange={this.props.onChange} />

				<label className="switch" htmlFor="flipswitch">
					<span className="on-label">{this.props.onLabel}</span>
					<span className="off-label">{this.props.offLabel}</span>
				</label>
			</div>
		);
	}
}
