import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import TextField from '../ui/TextField';
import Button from '../ui/Button';
import Flipswitch from '../ui/Flipswitch';

import AppState from '../reducers/AppState';
import { CreateQuestionState } from '../reducers/createQuestion';
import { QuestionModel, Visibility } from '../common/models/Question';
import ValidationError from '../common/ValidationError';
import { titleChange, visibilityChange, submitClick } from '../actions/createQuestion';

interface Actions {
	titleChange: (title: string) => void;
	visibilityChange: (visibility: Visibility) => void;
	submitClick: () => void;
}

interface Props {
	state?: CreateQuestionState;
	actions?: Actions;
}

class CreateQuestion extends React.Component<Props, {}> {
	render() {
		console.log(this.props.state.titleError);

		return (
			<form className="component create-question">
				<h2>Create your own Question</h2>
				
				<div className="card">
					<div className="card-body">
					
						<TextField type="text" value={this.props.state.title}
							hintText="Enter your Question here"
							errorText={ValidationError[this.props.state.titleError]}
							disabled={this.props.state.saveActive}
							onChange={this.onTitleChange} />

						<Flipswitch checked={this.props.state.visibility === 'public'}
							labelText="Visibility"
							disabled={this.props.state.saveActive}
							onLabel="Public" offLabel="Private"
							onChange={this.onVisibilityChange} />
						
						<div style={{textAlign: 'right'}}>
							<Button labelText="Create" onClick={this.onCreateClick}
								active={this.props.state.saveActive}
								disabled={!('titleValid' in this.props.state) || !!this.props.state.titleError || this.props.state.saveActive} />
						</div>

					</div>
				</div>
			</form>
		);
	}
	
	onTitleChange = (event: any) => {
		this.props.actions.titleChange(event.target.value);
	};

	onVisibilityChange = (event: any) => {
		let visibility: Visibility = event.target.checked ? 'public' : 'private';
		this.props.actions.visibilityChange(visibility);
	};
	
	onCreateClick = (event: React.MouseEvent) => {
		this.props.actions.submitClick();
	};
}

const mapStateToProps = (state: AppState) => ({ state: state.createQuestion });

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({ actions: {
	titleChange: (title: string) => dispatch(titleChange(title)),
	visibilityChange: (visibility: Visibility) => dispatch(visibilityChange(visibility)),
	submitClick: () => dispatch(submitClick())
}});

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestion);