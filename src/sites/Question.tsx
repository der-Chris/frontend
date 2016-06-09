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
	fetchQuestion: (id: string, visibilityToken?: string) => void;
}

interface Props {
	params: {
		id: string;
		visibilityToken?: string;
	};

	state: QuestionState;
	actions: Actions;
}

class Question extends React.Component<Props, {}> {
	componentDidMount() {
		this.props.actions.fetchQuestion(this.props.params.id, this.props.params.visibilityToken);
	}

	renderHeading() {
		let heading: string;

		if (this.props.state.fetchError) {
			heading = 'Fetch Error';
		}
		else if (this.props.state.fetchActive || !this.props.state.question) {
			heading = 'Loading...';
		}
		else {
			heading = this.props.state.question.title;
		}

		return (
			<h1>
				{heading}
				<Spinner visibile={this.props.state.fetchActive} />
			</h1>
		);
	}

	render() {
		let content: JSX.Element = <span />;

		if (this.props.state.fetchError) {
			content =
				<div className="card">
					<pre>{this.props.state.fetchError.reason}</pre>
					<Link to={'/'}>Back to Frontpage...</Link>
				</div>;
		}
		else if (!this.props.state.fetchActive && this.props.state.question) {
			content =
				<div>
					<ListSuggestions question={this.props.state.question} />
				</div>;
//					
//					<CreateSuggestion />
		}
		
		return (
			<div className="site please container">
				<Header />

				{this.renderHeading()}
				{content}
			</div>
		);
	}
}

const mapStateToProps = (state: AppState) => ({ state: state.question });

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({ actions: {
	fetchQuestion: (id: string, visibilityToken?: string) => dispatch(fetchById(id, visibilityToken))
}});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
