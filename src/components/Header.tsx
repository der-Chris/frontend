import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import AppState from '../reducers/AppState';

interface Props {
	actions: {};
}

class Header extends React.Component<Props, {}> {
	render() {
		return (
			<nav className="component header navbar navbar-fixed-top navbar-light bg-faded">
				<div className="container">
					<div className="row">
						<div className="col-md-12">

							<button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="collapsingNavbar">
								☰
							</button>

							<div className="collapse navbar-toggleable-xs" id="collapsingNavbar">
								<a className="navbar-brand" href="#">Help Me Choose</a>

								<ul className="nav navbar-nav pull-xs-right">
									<li className="nav-item active">
										<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">Legal</a>
									</li>
								</ul>
							</div>

						</div>
					</div>
				</div>
			</nav>
		);
	}
}

const mapStateToProps = (state: AppState) => ({});

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({ actions: {} });

export default connect(mapStateToProps, mapDispatchToProps)(Header);