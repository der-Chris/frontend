import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import AppState from '../reducers/AppState';
import Header from '../components/Header';
import CreateQuestion from '../components/CreateQuestion';
import ListQuestions from '../components/ListQuestions';

interface Props {
}

class Frontpage extends React.Component<Props, {}> {
	render() {
		return (
			<div className="site frontpage">
				<Header />
				
				<div className="section1 container">
					<div className="row">
						
						<div className="col-md-4">
							<div className="card card-block text-xs-center">
								<i className="fa fa-users" aria-hidden="true"></i>
								<h4 className="card-title">You have no new messages</h4>
								<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card card-block text-xs-center">
								<i className="fa fa-users" aria-hidden="true"></i>
								<h4 className="card-title">You have no new messages</h4>
								<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card card-block text-xs-center">
								<i className="fa fa-users" aria-hidden="true"></i>
								<h4 className="card-title">You have no new messages</h4>
								<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
							</div>
						</div>

					</div>
				</div>

				<div className="section2">
					<div className="container">
						<div className="row">
							<div className="col-md-12">

								<div className="row">
									<div className="col-lg-7 col-md-12">
										<CreateQuestion />
									</div>
									<div className="col-lg-5 col-md-12">
										<h2>Featured Questions</h2>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>

				<div className="section3 row">
					<div className="col-md-12">
						
						<div className="columns grid-960 centered">
							<div className="column col-12">
								<ListQuestions />
							</div>
						</div>

					</div>
				</div>

			</div>
		);
	}
}

const mapStateToProps = (state: AppState) => ({});

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Frontpage);
