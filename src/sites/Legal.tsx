import * as React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import AppState from '../reducers/AppState';
import { QuestionState } from '../reducers/question';
import { fetchById } from '../actions/question';
import CreateSuggestion from '../components/CreateSuggestion';
import ListSuggestions from '../components/ListSuggestions';

import Header from '../components/Header';
import Spinner from '../ui/Spinner';

interface Actions {
}

interface Props {
	state: QuestionState;
	actions: Actions;
}

class Legal extends React.Component<Props, {}> {
	render() {
		return (
			<div className="site legal container">
				<Header />

				<h1>Legal</h1>
				
			</div>
		);
	}
}

const mapStateToProps = (state: AppState) => ({ });

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({ actions: {
}});

export default connect(mapStateToProps, mapDispatchToProps)(Legal);
