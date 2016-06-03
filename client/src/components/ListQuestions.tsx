import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import AppState from '../reducers/AppState';
import { ListQuestionsState } from '../reducers/listQuestions';
import { QuestionModel } from '../../../common/models/Question';
import { find } from '../actions/listQuestions';
import { redirectViewQuestion } from '../actions/question';

interface Actions {
	findQuestions: (filter: Object) => void;
	redirectViewQuestion: (question: QuestionModel) => void;
}

interface Props {
	titleText?: string;
	filter: Object;
	
	state?: ListQuestionsState;
	actions?: Actions;
}

class ListQuestions extends React.Component<Props, any> {
	componentDidMount() {
		this.props.actions.findQuestions(this.props.filter);
	}
	
	render() {
		return (
			<div className="component list-questions columns">
				{this.props.titleText ? <h2>{this.props.titleText}</h2> : ''}

				{this.props.state.questions.map((question: QuestionModel) => {
					return (
						<div className="column col-3 col-md-4 col-sm-6">
							<div className="clickable card" onClick={this.onQuestionClick.bind(this, question)}>
								<h4>{question.title}</h4>
								<small>Created at {question.meta.createdAt}</small>
							</div>
						</div>
					);
				})}
			</div>
		);
	}

	onQuestionClick(question: QuestionModel) {
		this.props.actions.redirectViewQuestion(question);
	}
}

const mapStateToProps = (state: AppState) => ({ state: state.listQuestions });

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({ actions: {
	findQuestions: (filter: Object) => dispatch(find(filter)),
	redirectViewQuestion: (question: QuestionModel) => redirectViewQuestion(question)
}});

export default connect(mapStateToProps, mapDispatchToProps)(ListQuestions);
