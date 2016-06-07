import * as React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import AppState from '../reducers/AppState';
import { QuestionState } from '../reducers/question';
import { fetchById } from '../actions/question';
import Header from '../components/Header';
import CreateSuggestion from '../components/CreateSuggestion';
import ListSuggestions from '../components/ListSuggestions';

import Progress from '../ui/Progress';

interface Actions {
	fetchQuestion: (id: string, visibilityToken?: string) => void;
}

interface Props {
	params?: {
		id: string;
		visibilityToken?: string;
	};

	state?: QuestionState;
	actions?: Actions;
}

class Please extends React.Component<Props, {}> {
	componentDidMount() {
		this.props.actions.fetchQuestion(this.props.params.id, this.props.params.visibilityToken);
	}

	render() {
		let heading = '', content: JSX.Element;

		if (this.props.state.fetchError) {
			heading = 'Fetch Error';
			content =
				<div className="card">
					<pre>{this.props.state.fetchError.reason}</pre>
					<Link to={'/'}>Back to Frontpage...</Link>
				</div>;
		}
		else if (this.props.state.fetchActive || !this.props.state.question) {
			heading = 'Loading...';
			content = <Progress />;
		}
		else {
			heading = this.props.state.question.title;
			content =
				<div>
					<CreateSuggestion />
					<ListSuggestions
						questionId={this.props.params.id}
						visibilityToken={this.props.params.visibilityToken} />
				</div>;
		}
		
		return (
			<div className="site please container">
				<Header />

				<h1>{heading}</h1>
				{content}
			</div>
		);
	}
}

const mapStateToProps = (state: AppState) => ({ state: state.question });

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({ actions: {
	fetchQuestion: (id: string, visibilityToken?: string) => dispatch(fetchById(id, visibilityToken))
}});

export default connect(mapStateToProps, mapDispatchToProps)(Please);
