import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class About extends React.Component<any, any> {
	render() {
		console.log(this.props);
	
		return (
			<div>
				<h1>About</h1>
				<Link to="/">Goto Counter</Link>
			</div>
		);
	}
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
