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
						<div className="col-md-12">

						<div className="card-deck-wrapper"><div className="card-deck">
							<div className="card card-block text-xs-center">
								<i className="fa fa-users" aria-hidden="true"></i>
								<h4 className="card-title">Collabortate with your friends, family, team...</h4>
								<p className="card-text">
									<small className="text-muted">
										You have the option to set your question to private. Only people you sent
										your personal question link will be able to access it.
									</small>
								</p>
							</div>
							<div className="card card-block text-xs-center">
								<i className="fa fa-comments" aria-hidden="true"></i>
								<h4 className="card-title">Don't miss a suggestion or comment</h4>
								<p className="card-text">
									<small className="text-muted">
										Each suggestion can be commented and voted. Thus, you always see what suggestion
										is voted best at any time. Using the comments, you can point out what the
										advantages or disadvantages of each suggestion are.
									</small>
								</p>
							</div>
							<div className="card card-block text-xs-center">
								<i className="fa fa-gift" aria-hidden="true"></i>
								<h4 className="card-title">Help Me Choose is completely free!</h4>
								<p className="card-text">
									<small className="text-muted">
									 	Neither the question creator nor contributers are charged for anything and you
									 	do not need an account to create a question or contribute. Just enjoy this service!
									</small>
								</p>
							</div>
						</div></div>
						</div>
					</div>
				</div>

				<div className="section2">
					<div className="container">
						<div className="row">
							<div className="col-md-12">

								<div className="row">
									<div className="col-lg-7 col-md-12">
										<h2>Create your own Question</h2>
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
