import * as React from 'react';
import { connect } from 'react-redux';

import Progress from '../ui/Progress';

import AppState from '../reducers/AppState';
import { fetchAll } from '../actions/listSuggestions';
import { SuggestionModel } from '../common/models/Suggestion';

interface Actions {
	fetchAll: (questionId: string, visibilityToken?: string) => void;
}

interface Props {
	actions?: Actions;
}

class PleaseSuggestions extends React.Component<Props, {}> {
	componentDidMount() {
		this.props.actions.fetchAll(this.props.questionId, this.props.visibilityToken);
	}

	render() {
		let content: JSX.Element;
		if (this.props.fetchAllActive) {
			content = <Progress />;
		}
		else {
			content =
				<div>
					{this.props.suggestions.map((suggestion: SuggestionModel) => {
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

const mapStateToProps = (state: AppState) => state.listSuggestions;

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({ actions: {
	fetchAll: (questionId: string, visibilityToken?: string) => dispatch(fetchAll(questionId, visibilityToken))
}});

export default connect(mapStateToProps, mapDispatchToProps)(PleaseSuggestions);
