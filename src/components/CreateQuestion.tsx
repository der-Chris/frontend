import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import TextField from '../ui/TextField';
import Button from '../ui/Button';
import Progress from '../ui/Progress';

import AppState from '../reducers/AppState';
import { Question } from '../models/Question';
import { titleChange, submitClick } from '../actions/createQuestion';

class CreateQuestion extends React.Component<any, any> {
	render() {
		let progressIndicator = <span />;
		if (this.props.saveActive) {
			progressIndicator = <Progress />;
		}
		
		return (
			<div className="component create-question">
				<h2>Create Question {this.props.saveActive}</h2>
				
				<TextField type="text" value={this.props.title}
					hintText="Help me choose which used car to buy."
					labelText="Enter your Question here"
					errorText={this.props.titleValid}
					disabled={this.props.saveActive}
					onChange={this.onTitleChange} />
				
				<div style={{textAlign: 'right'}}>
					<Button labelText="Create" onClick={this.onCreateClick}
						disabled={!('titleValid' in this.props) || !!this.props.titleValid || this.props.saveActive} />
				</div>
			</div>
		);
	}
	
	onTitleChange = (event: any) => {
		this.props.titleChange(event.target.value.trim());
	};
	
	onCreateClick = (event: React.MouseEvent) => {
		this.props.submitClick();
	};
}

const mapStateToProps = (state: AppState) => state.createQuestion;

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({
	titleChange: (title: string) => dispatch(titleChange(title)),
	submitClick: () => dispatch(submitClick())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestion);
