import * as React from 'react';
import { connect } from 'react-redux';

import Box from '../ui/Box';
import AppState from '../reducers/AppState';

class PleaseSuggestions extends React.Component<any, any> {
	render() {
		let content: JSX.Element;

		if (this.props.fetchActive) {
			content = <span />;
		}

		return (
			<div className="component please-suggestions">
				{content}
			</div>
		);
	}
}

const mapStateToProps = (state: AppState) => state.question;

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PleaseSuggestions);
