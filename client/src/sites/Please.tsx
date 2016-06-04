import * as React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Progress from '../ui/Progress';

import AppState from '../reducers/AppState';
import { fetchById } from '../actions/question';
import CreateSuggestion from '../components/CreateSuggestion';
import ListSuggestions from '../components/ListSuggestions';

interface Actions {
	fetchQuestion: (id: string, visibilityToken?: string) => void;
}

interface Props {
	actions?: Actions;
}

class Please extends React.Component<Props, {}> {
	componentDidMount() {
		this.props.actions.fetchQuestion(this.props.params.id, this.props.params.visibilityToken);
	}

	render() {
		let heading = '', content: JSX.Element;

		if (this.props.fetchError) {
			heading = 'Fetch Error';
			content =
				<Box>
					<pre>{this.props.fetchError.message}</pre>
					<Link to={'/'}>Back to Frontpage...</Link>
				</Box>;
		}
		else if (this.props.fetchActive || !this.props.question) {
			heading = 'Loading...';
			content = <Progress />;
		}
		else {
			heading = this.props.question.title;
			content =
				<div>
					<CreateSuggestion />
					<ListSuggestions
						questionId={this.props.params.id}
						visibilityToken={this.props.params.visibilityToken} />
				</div>;
		}
		
		return (
			<div className="site please">
				<h1>{heading}</h1>
				{content}
			</div>
		);
	}
}

const mapStateToProps = (state: AppState) => state.question;

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({ actions: {
	fetchQuestion: (id: string, visibilityToken?: string) => dispatch(fetchById(id, visibilityToken))
}});

export default connect(mapStateToProps, mapDispatchToProps)(Please);
