import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { Paper } from 'material-ui';

import CreateQuestion from '../components/CreateQuestion';

class Frontpage extends React.Component<any, any> {
	render() {
		return (
			<div className="site frontpage">
				<h1>Frontpage</h1>
				
				<Paper zDepth={2}>
					<CreateQuestion />
				</Paper>
			</div>
		);
	}
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Frontpage);
