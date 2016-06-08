import * as React from 'react';
import { connect } from 'react-redux';

import Spinner from '../ui/Spinner';

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
		this.props.actions.fetchAll(this.props.question);
	}

	render() {
		let content: JSX.Element = <span />;
		if (!this.props.state.fetchAllActive) {
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
				<Spinner visibile={this.props.state.fetchAllActive} />
				{content}
			</div>
		);
	}
}

const mapStateToProps = (state: AppState) => ({ state: state.listSuggestions });

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({ actions: {
	fetchAll: (question: QuestionModel) => dispatch(fetchAll(question))
}});

export default connect(mapStateToProps, mapDispatchToProps)(ListSuggestions);
