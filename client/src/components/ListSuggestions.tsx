import * as React from 'react';
import { connect } from 'react-redux';

import Box from '../ui/Box';
import Progress from '../ui/Progress';

import AppState from '../reducers/AppState';
import { fetchAll } from '../actions/listSuggestions';
import { SuggestionModel } from '../models/Suggestion';

class PleaseSuggestions extends React.Component<any, any> {
	componentDidMount() {
		this.props.fetchAll(this.props.questionId, this.props.key);
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
							<Box key={suggestion._id}>
								<h3>{suggestion.text}</h3>
								<small>Created at {suggestion.createdAt}</small>
							</Box>
						);
					})}
				</div>;
		}

		return (
			<div className='component list-suggestions'>
				{content}
			</div>
		);
	}
}

const mapStateToProps = (state: AppState) => state.listSuggestions;

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({
	fetchAll: (questionId: string, key?: string) => dispatch(fetchAll(questionId, key))
});

export default connect(mapStateToProps, mapDispatchToProps)(PleaseSuggestions);
