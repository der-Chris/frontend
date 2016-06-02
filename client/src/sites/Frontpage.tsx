import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Box from '../ui/Box';

import AppState from '../reducers/AppState';
import Header from '../components/Header';
import CreateQuestion from '../components/CreateQuestion';
import ListQuestions from '../components/ListQuestions';

const filter = { visibility: 'public' };

class Frontpage extends React.Component<{}, {}> {
	render() {
		return (
			<div>
				<div className="site frontpage container">
					<Header />
					
					<div className="background columns">
						<div className="column col-12">

							<div className="card grid-960 centered">
								<div className="card-body">
									<CreateQuestion />
								</div>
							</div>

						</div>
					</div>
				</div>

				<div className="site frontpage container grid-960">
					<ListQuestions filter={filter} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state: AppState) => state;

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Frontpage);
