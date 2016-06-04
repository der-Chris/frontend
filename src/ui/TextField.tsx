import * as React from 'react';

interface TextFieldProps {
	type: string;
	value?: string;
	labelText?: string;
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
			<label className="ui text-field">
				{this.props.labelText ? <span>{this.props.labelText+':'}</span> : ''}

				<input type={this.props.type}
					placeholder={this.props.hintText}
					value={this.props.value}
					disabled={disabled}
					onChange={this.props.onChange} />

				{this.props.errorText ? <span className="error">{this.props.errorText}</span> : ''}
			</label>
		);
	}
}
