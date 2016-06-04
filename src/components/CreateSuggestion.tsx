import * as React from 'react';
import { connect } from 'react-redux';

import TextField from '../ui/TextField';
import Button from '../ui/Button';
import AppState from '../reducers/AppState';
import { textChange, submitClick } from '../actions/createSuggestion';

class CreateSuggestion extends React.Component<any, any> {
	render() {
		return (
			<div className="component create-suggestion">
				<div className="card">
					<TextField type="text"
						value={this.props.text}
						hintText="Enter your suggestion here."
						errorText={this.props.textValid}
						disabled={this.props.saveActive}
						onChange={this.onTextChange} />

					<div style={{float: 'right'}}>
						<Button labelText="Create" onClick={this.onCreateClick}
							active={this.props.saveActive}
							disabled={!('textValid' in this.props) || !!this.props.textValid || this.props.saveActive} />
					</div>

					<div className="clearfix"></div>
				</div>
			</div>
		);
	}

	onTextChange = (event: any) => {
		this.props.textChange(event.target.value);
	};

	onCreateClick = () => {
		this.props.submitClick(this.props.text);
	};
}

const mapStateToProps = (state: AppState) => state.createSuggestion ? state.createSuggestion : {};

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({
	textChange: (text: string) => dispatch(textChange(text)),
	submitClick: (text: string) => dispatch(submitClick(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateSuggestion);