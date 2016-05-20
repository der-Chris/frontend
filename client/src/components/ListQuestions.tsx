import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Box from '../ui/Box';
import AppState from '../reducers/AppState';
import { QuestionModel } from '../models/Question';
import { find } from '../actions/listQuestions';
import { redirectViewQuestion } from '../actions/question';

interface Props {
	titleText?: string;
	filter: Object;
	questions: QuestionModel[];
}

class ListQuestions extends React.Component<Props, any> {
	componentDidMount() {
		this.props.findQuestions(this.props.filter);
	}

	render() {
		return (
			<div className="component list-questions">
				{this.props.titleText ? <h2>{this.props.titleText}</h2> : ''}

				{this.props.questions.map((question: QuestionModel) => {
					return (
						<Box onClick={this.onQuestionClick.bind(this, question)} key={question._id}>
							<h3>{question.title}</h3>
							<small>Created at {question.createdAt}</small>
						</Box>
					);
				})}
			</div>
		);
	}

	onQuestionClick(question: QuestionModel) {
		this.props.redirectViewQuestion(question);
	}
}

const mapStateToProps = (state: AppState) => state.listQuestions;

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({
	findQuestions: (filter: Object) => dispatch(find(filter)),
	redirectViewQuestion: (question: QuestionModel) => redirectViewQuestion(question)
});

export default connect(mapStateToProps, mapDispatchToProps)(ListQuestions);
