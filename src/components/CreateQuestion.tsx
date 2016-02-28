import * as React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import LinearProgress from 'material-ui/lib/linear-progress';

import { Question } from '../models/Question';
import { nameChange, submitClick } from '../actions/createQuestion';

let textfieldStyle = {
	width: '100%'
};

class CreateQuestion extends React.Component<any, any> {
	render() {
		let progressIndicator = <span />;
		if (this.props.saveActive) {
			progressIndicator = <LinearProgress mode="indeterminate" />;
		}
		
		return (
			<div className="component create-question">
				<h2>Create Question {this.props.saveActive}</h2>
				
				<TextField type="text" style={textfieldStyle}
					hintText="Help me choose what used car to buy."
					floatingLabelText="Enter your Question here"
					errorText={this.props.nameValid}
					disabled={this.props.saveActive}
					onChange={this.onNameChange} />
				
				<div style={{textAlign: 'right'}}>
					<RaisedButton label="Create"
						disabled={!('nameValid' in this.props) || !!this.props.nameValid || this.props.saveActive}
						children={progressIndicator}
						onClick={this.onCreateClick} />
				</div>
			</div>
		);
	}
	
	onNameChange = (event) => {
		this.props.nameChange(event.target.value.trim());
	}
	
	onCreateClick = (event) => {
		this.props.submitClick(this.handleQuestionCreated);
	}
	
	handleQuestionCreated = (question: Question) => {
		browserHistory.push('/please/'+question._id);
	}
}

const mapStateToProps = (state) => state.createQuestion;

const mapDispatchToProps = (dispatch) => ({
	nameChange: (name: string) => dispatch(nameChange(name)),
	submitClick: (callback: (question: Question) => any) => dispatch(submitClick(callback))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestion);
