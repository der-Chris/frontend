import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Please extends React.Component<any, any> {
	render() {
		return (
			<div className="site please">
				<p>
					<label>Counter: </label>
					<b>#{this.props.counter}</b>
				</p>
				<button onClick={e => this.props.incr()}>INCREMENT</button>
				<span style={{ padding: "0 5px" }} />
				<button onClick={e => this.props.decr()}>DECREMENT</button>
				<span style={{ padding: "0 5px" }} />
				<button onClick={e => this.props.set(50)}>SET 50</button>
				<span style={{ padding: "0 5px" }} />
				<Link to="/about">About</Link>
			</div>
		);
	}
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
	set: (value: number) => {
		dispatch({ type: 'SET', to: value });
	},
	incr: () => {
		dispatch({ type: 'INCR', by: 1 });
	},
	decr: () => {
		dispatch({ type: 'INCR', by: -1 });
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Please);
