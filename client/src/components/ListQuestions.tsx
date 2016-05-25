import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Box from '../ui/Box';
import AppState from '../reducers/AppState';
import { ListQuestionsState } from '../reducers/listQuestions';
import { QuestionModel } from '../models/Question';
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
			<div className="component list-questions">
				{this.props.titleText ? <h2>{this.props.titleText}</h2> : ''}

				{this.props.state.questions.map((question: QuestionModel) => {
					return (
						<Box onClick={this.onQuestionClick.bind(this, question)} key={question.id}>
							<h3>{question.title}</h3>
							<small>Created at {question.meta.createdAt}</small>
						</Box>
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
