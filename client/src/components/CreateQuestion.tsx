import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import TextField from '../ui/TextField';
import Button from '../ui/Button';
import Flipswitch from '../ui/Flipswitch';

import AppState from '../reducers/AppState';
import { QuestionModel, Visibility } from '../models/Question';
import { titleChange, visibilityChange, submitClick } from '../actions/createQuestion';

class CreateQuestion extends React.Component<any, any> {
	render() {
		return (
			<div className="component create-question">
				<h2>Create Question {this.props.saveActive}</h2>
				
				<TextField type="text" value={this.props.title}
					hintText="Help me choose which used car to buy."
					labelText="Enter your Question here"
					errorText={this.props.titleValid}
					disabled={this.props.saveActive}
					onChange={this.onTitleChange} />

				<Flipswitch checked={this.props.visibility === 'public'}
					labelText="Visibility"
					onLabel="Public" offLabel="Private"
					onChange={this.onVisibilityChange} />
				
				<div style={{textAlign: 'right'}}>
					<Button labelText="Create" onClick={this.onCreateClick}
						active={this.props.saveActive}
						disabled={!('titleValid' in this.props) || !!this.props.titleValid || this.props.saveActive} />
				</div>
			</div>
		);
	}
	
	onTitleChange = (event: any) => {
		this.props.titleChange(event.target.value);
	};

	onVisibilityChange = (event: any) => {
		let visibility = event.target.checked ? 'public' : 'private';
		this.props.visibilityChange(visibility);
	};
	
	onCreateClick = (event: React.MouseEvent) => {
		this.props.submitClick();
	};
}

const mapStateToProps = (state: AppState) => state.createQuestion;

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({
	titleChange: (title: string) => dispatch(titleChange(title)),
	visibilityChange: (visibility: Visibility) => dispatch(visibilityChange(visibility)),
	submitClick: () => dispatch(submitClick())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestion);
