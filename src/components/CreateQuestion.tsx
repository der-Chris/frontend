import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import TextField from '../ui/TextField';
import Button from '../ui/Button';
import Progress from '../ui/Progress';

import AppState from '../reducers/AppState';
import { Question } from '../models/Question';
import { nameChange, submitClick } from '../actions/createQuestion';

class CreateQuestion extends React.Component<any, any> {
	render() {
		let progressIndicator = <span />;
		if (this.props.saveActive) {
			progressIndicator = <Progress />;
		}
		
		return (
			<div className="component create-question">
				<h2>Create Question {this.props.saveActive}</h2>
				
				<TextField type="text" value={this.props.name}
					hintText="Help me choose which used car to buy."
					labelText="Enter your Question here"
					errorText={this.props.nameValid}
					disabled={this.props.saveActive}
					onChange={this.onNameChange} />
				
				<div style={{textAlign: 'right'}}>
					<Button labelText="Create" onClick={this.onCreateClick} />
//						disabled={!('nameValid' in this.props) || !!this.props.nameValid || this.props.saveActive}
//						children={progressIndicator} />
				</div>
			</div>
		);
	}
	
	onNameChange = (event: any) => {
		this.props.nameChange(event.target.value.trim());
	}
	
	onCreateClick = (event: __React.MouseEvent) => {
		this.props.submitClick();
	}
}

const mapStateToProps = (state: AppState) => state.createQuestion;

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({
	nameChange: (name: string) => dispatch(nameChange(name)),
	submitClick: () => dispatch(submitClick())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestion);
