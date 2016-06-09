import * as React from 'react';
import { connect } from 'react-redux';

import TextField from '../ui/TextField';
import Button from '../ui/Button';
import AppState from '../reducers/AppState';
import { CreateSuggestionState } from '../reducers/createSuggestion';
import { textChange, submitClick } from '../actions/createSuggestion';
import ValidationError from '../common/ValidationError';

interface Actions {
	textChange: (text: string) => void;
	submitClick: (text: string) => void;
}

interface Props {
	state: CreateSuggestionState;
	actions: Actions;
}

class CreateSuggestion extends React.Component<Props, {}> {
	hasValidationError() {
		return this.props.state.textError !== null;
	}

	render() {
		return (
			<div className="component create-suggestion row">
				<form className="col-xs-12 card card-block">

					<TextField type="text" value={this.props.state.text}
						id="component-create-suggestion_text"
						hintText=""
						labelText="Enter your suggestion here"
						errorText={ValidationError[this.props.state.textError]}
						disabled={this.props.state.saveActive}
						onChange={this.onTextChange} />

					<div className="text-xs-right">
						<Button labelText="Create" onClick={this.onCreateClick}
							active={this.props.state.saveActive}
							disabled={this.props.state.saveActive || this.hasValidationError()} />
					</div>

				</form>
			</div>
		);
	}

	onTextChange = (event: any) => {
		this.props.actions.textChange(event.target.value);
	};

	onCreateClick = () => {
		this.props.actions.submitClick(this.props.state.text);
	};
}

const mapStateToProps = (state: AppState) => ({ state: state.createSuggestion });

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({ actions: {
	textChange: (text: string) => dispatch(textChange(text)),
	submitClick: (text: string) => dispatch(submitClick(text))
}});

export default connect(mapStateToProps, mapDispatchToProps)(CreateSuggestion);