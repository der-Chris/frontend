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
	state: ListQuestionsState;
	actions: Actions;
}

class ListQuestions extends React.Component<Props, {}> {
	componentDidMount() {
		this.props.actions.findQuestions({ visibility: 'public' });
	}
	
	render() {
		return (
			<div className="component list-questions">

				{this.props.state.questions.map((question) => {
					return (
						<div className="col-md-4 col-sm-6 col-xs-12" key={question._id}>
							<div className="clickable card card-block" onClick={this.onQuestionClick.bind(this, question)}>
								<h4 className="card-title">{question.title}</h4>
								<p className="card-text">Created at {question.meta.createdAt}</p>
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
	redirectViewQuestion: (question: QuestionModel) => dispatch(redirectViewQuestion(question))
}});

export default connect(mapStateToProps, mapDispatchToProps)(ListQuestions);
