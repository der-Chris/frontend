import * as React from 'react';
import * as classnames from 'classnames';

interface TextFieldProps {
	type: string;
	value?: string;
	hintText: string;
	errorText?: string;
	disabled?: boolean;
	onChange: any;
}

export default class TextField extends React.Component<TextFieldProps, {}> {
	render() {
		let disabled = this.props.disabled;
		if (typeof disabled === 'undefined') disabled = false;

		return (
			<div className={classnames('ui text-field input-group input-lg', { 'has-danger': !!this.props.errorText })}>
				<input className="form-input"
					type={this.props.type}
					placeholder={this.props.hintText}
					value={this.props.value}
					disabled={disabled}
					onChange={this.props.onChange} />

				<span className={classnames('error input-group-addon input-lg tooltip tooltip-bottom', { 'hide': !this.props.errorText })}
					data-tooltip="Lorem ipsum dolor sit amet">
					{this.props.errorText}
				</span>
			</div>
		);
	}
}
