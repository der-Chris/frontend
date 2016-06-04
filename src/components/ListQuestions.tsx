import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import AppState from '../reducers/AppState';
import { ListQuestionsState } from '../reducers/listQuestions';
import { QuestionModel } from '../common/models/Question';
import { find } from '../actions/listQuestions';
import { redirectViewQuestion } from '../actions/question';

interface Actions {
	findQuestions: (filter: Object) => void;
	redirectViewQuestion: (question: QuestionModel) => void;
}

interface Props {
	titleText?: string;
	
	state?: ListQuestionsState;
	actions?: Actions;
}

class ListQuestions extends React.Component<Props, any> {
	componentDidMount() {
		this.props.actions.findQuestions({ visibility: 'public' });
	}
	
	render() {
		return (
			<div className="component list-questions columns">
				{this.props.titleText ? <h2>{this.props.titleText}</h2> : ''}

				{this.props.state.questions.map((question: QuestionModel) => {
					return (
						<div className="column col-3 col-md-4 col-sm-6 col-xs-12" key={question._id}>
							<div className="clickable card" onClick={this.onQuestionClick.bind(this, question)}>
								<div className="card-header">
									<h4 className="card-title">{question.title}</h4>
									<h6 className="card-meta">Created at {question.meta.createdAt}</h6>
								</div>
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
