import * as React from 'react';

interface TextFieldProps {
	type: string;
	value: string;
	labelText: string;
	hintText: string;
	errorText: string;
	disabled: boolean;
	onChange: any;
}

export default class TextField extends React.Component<TextFieldProps, {}> {
	render() {
		return (
			<label className="ui text-field">
				<span>{this.props.labelText}</span>
				<input type={this.props.type}
					value={this.props.value}
					onChange={this.props.onChange} />
			</label>
		);
	}
}
