import * as React from 'react';
import { connect } from 'react-redux';

import Progress from '../ui/Progress';

import AppState from '../reducers/AppState';
import { ListSuggestionsState } from '../reducers/listSuggestions';
import { fetchAll } from '../actions/listSuggestions';
import { QuestionModel } from '../common/models/Question';
import { SuggestionModel } from '../common/models/Suggestion';

interface Actions {
	fetchAll: (questionId: string, visibilityToken?: string) => void;
}

interface Props {
	question: QuestionModel;

	actions: Actions;
	state: ListSuggestionsState;
}

class ListSuggestions extends React.Component<Props, {}> {
	componentDidMount() {
		this.props.actions.fetchAll(this.props.question._id, this.props.question.visibilityToken);
	}

	render() {
		let content: JSX.Element;
		if (this.props.state.fetchAllActive) {
			content = <Progress />;
		}
		else {
			content =
				<div>
					{this.props.state.suggestions.map((suggestion: SuggestionModel) => {
						return (
							<div className="card" key={suggestion._id}>
								<h3>{suggestion.text}</h3>
								<small>Created at {suggestion.meta.createdAt}</small>
							</div>
						);
					})}
				</div>;
		}

		return (
			<div className="component list-suggestions">
				{content}
			</div>
		);
	}
}

const mapStateToProps = (state: AppState) => ({ state: state.listSuggestions });

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({ actions: {
	fetchAll: (questionId: string, visibilityToken?: string) => dispatch(fetchAll(questionId, visibilityToken))
}});

export default connect(mapStateToProps, mapDispatchToProps)(ListSuggestions);
