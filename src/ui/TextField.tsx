import * as React from 'react';
import * as classnames from 'classnames';

interface Props {
	type: string;
	value?: string;
	labelText: string;
	hintText: string;
	errorText?: string;
	disabled?: boolean;
	onChange: any;
}

export default class TextField extends React.Component<Props, {}> {
	render() {
		let disabled = this.props.disabled;
		if (typeof disabled === 'undefined') disabled = false;

		return (
			<fieldset className={classnames('ui text-field form-group', { 'has-danger': !!this.props.errorText })}>
				<label className="form-control-label">
					{this.props.labelText}
					{this.props.errorText ? ' - '+this.props.errorText : ''}
				</label>

				<input className={classnames('form-control', { 'form-control-danger': !!this.props.errorText })}
					type={this.props.type}
					placeholder={this.props.hintText}
					value={this.props.value}
					disabled={disabled}
					onChange={this.props.onChange} />
			</fieldset>
		);
	}
}
