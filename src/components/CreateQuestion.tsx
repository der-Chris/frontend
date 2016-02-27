import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { RaisedButton } from 'material-ui';

class CreateQuestion extends React.Component<any, any> {
	render() {
		return (
			<div className="component create-question">
				<h2>Create Question</h2>
				
				<RaisedButton label="Default" />
			</div>
		);
	}
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestion);
