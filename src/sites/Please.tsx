import * as React from 'react';
import { connect } from 'react-redux';

import Progress from '../ui/Progress';

import AppState from '../reducers/AppState';
import { fetchQuestion } from '../actions/question';
import PleaseSuggestions from '../components/PleaseSuggestions';

class Please extends React.Component<any, any> {
	componentDidMount() {
		this.props.fetchQuestion(this.props.params.qid);
	}

	render() {
		let heading = '', content: JSX.Element;
		
		if (this.props.fetchActive || !this.props.question) {
			heading = 'Loading...';
			content = <Progress />;
		}
		else if (this.props.fetchError) {
			heading = 'Fetch Error';
			content = <pre>{this.props.fetchError}</pre>;
		}
		else {
			heading = this.props.question.name;
			content = <PleaseSuggestions />
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
