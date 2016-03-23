import * as React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Box from '../ui/Box';
import Progress from '../ui/Progress';

import AppState from '../reducers/AppState';
import { fetchQuestion } from '../actions/question';
import Suggestions from '../components/Suggestions';

class Please extends React.Component<any, any> {
	componentDidMount() {
		this.props.fetchQuestion(this.props.params.qid);
	}

	render() {
		let heading = '', content: JSX.Element;

		if (this.props.fetchError) {
			heading = 'Fetch Error';
			content = <Box>
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
			content = <Box><Suggestions /></Box>;
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

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({
	fetchQuestion: (id: string) => dispatch(fetchQuestion(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Please);
