import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Box from '../ui/Box';

import AppState from '../reducers/AppState';
import CreateQuestion from '../components/CreateQuestion';

class Frontpage extends React.Component<any, any> {
	render() {
		return (
			<div className="site frontpage">
				<h1>Help-me-Choose</h1>
				
				<Box>
					<CreateQuestion />
				</Box>
			</div>
		);
	}
}

const mapStateToProps = (state: AppState) => state;

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Frontpage);
