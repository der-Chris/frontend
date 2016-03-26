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
		// Prepare label
		let label: any = '';
		if (this.props.labelText) {
			label = <span>{this.props.labelText+':'}</span>;
		}

		let disabled = this.props.disabled;
		if (typeof disabled === 'undefined') disabled = false;

		return (
			<label className="ui text-field">
				{label}

				<input type={this.props.type}
					placeholder={this.props.hintText}
					value={this.props.value}
					disabled={disabled}
					onChange={this.props.onChange} />
			</label>
		);
	}
}
