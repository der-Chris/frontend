import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import AppState from '../reducers/AppState';
import Header from '../components/Header';
import CreateQuestion from '../components/CreateQuestion';
import ListQuestions from '../components/ListQuestions';

const filter = { visibility: 'public' };

interface Props {
}

class Frontpage extends React.Component<Props, {}> {
	render() {
		return (
			<div className="site frontpage container">
				
				<Header />
				
				<div className="section1 columns">
					<div className="column col-12">

						<div className="columns grid-960 centered">
							<div className="column col-12">
								<div className="columns">
									<div className="column col-4">
										<div className="empty">
											<i className="icon icon-people"></i>
											<p className="empty-title">You have no new messages</p>
											<p className="empty-meta">Click the button to start a conversation.</p>
											<button className="empty-action btn btn-primary">Send a message</button>
										</div>
									</div>
									<div className="column col-4">
										<div className="empty">
											<span className="icon icon-markunread"></span>
											<p className="empty-title">You have no new messages</p>
											<p className="empty-meta">Click the button to start a conversation.</p>
											<button className="empty-action btn btn-primary">Send a message</button>
										</div>
									</div>
									<div className="column col-4">
										<div className="empty">
											<i className="icon icon-people"></i>
											<p className="empty-title">You have no new messages</p>
											<p className="empty-meta">Click the button to start a conversation.</p>
											<button className="empty-action btn btn-primary">Send a message</button>
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="section2 columns">
					<div className="column col-12">

						<div className="card grid-960 centered">
							<div className="card-body">
								<CreateQuestion />
							</div>
						</div>

					</div>
				</div>

				<div className="section3 columns">
					<div className="column col-12">
						
						<div className="columns grid-960 centered">
							<div className="column col-12">
								<ListQuestions filter={filter} />
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
