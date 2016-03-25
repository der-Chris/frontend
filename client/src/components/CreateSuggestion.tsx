import * as React from 'react';
import { connect } from 'react-redux';

import Box from '../ui/Box';
import TextField from '../ui/TextField';
import AppState from '../reducers/AppState';
import { textChange } from '../actions/createSuggestion';

class CreateSuggestion extends React.Component<any, any> {
	render() {
		return (
			<div className="component create-suggestion">
				<Box>
					<TextField type="text"
						hintText="Enter your suggestion here."
						onChange={this.onTextChange} />
				</Box>
			</div>
		);
	}

	onTextChange = (event: any) => {
		this.props.textChange(event.target.value);
	};
}

const mapStateToProps = (state: AppState) => state.createSuggestion ? state.createSuggestion : {};

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({
	textChange: (text: string) => dispatch(textChange(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateSuggestion);