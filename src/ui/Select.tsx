import * as React from 'react';
import * as classnames from 'classnames';

interface Props {
	labelText: string;
	value?: string;
	options: { [key: string]: string };
	disabled?: boolean;
	onChange: any;
}

export default class Select extends React.Component<Props, {}> {
	render() {
		let disabled = this.props.disabled;
		if (typeof disabled === 'undefined') disabled = false;

		let options: JSX.Element[] = [];
		Object.keys(this.props.options).forEach((key: string) => {
			let option = 
				<option value={key} key={key}>
					{this.props.options[key]}
				</option>;
			options.push(option);
		});

		return (
			<div className={classnames('ui select form-group')}>
				<label className="block">{this.props.labelText}</label>

				<select className="form-select"
					disabled={disabled}>

					{options}
				</select>
    		</div>
		);
	}
}
