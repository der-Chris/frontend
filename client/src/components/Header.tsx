import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import AppState from '../reducers/AppState';

interface Props {
}

class Header extends React.Component<Props, {}> {
	render() {
		return (
			<div className="component header columns">
				<div className="column col-12 centered">

					<header className="navbar">
						<section className="navbar-section">
							<a href="#" className="btn btn-link btn-lg">
								<i className="icon icon-people"></i>
							</a>
							<a href="#" className="navbar-brand">Help Me Choose</a>
						</section>
						
						<section className="navbar-section">
							<a href="#" className="btn btn-link">Legal</a>
						</section>
					</header>

				</div>
			</div>
		);
	}
}

const mapStateToProps = (state: AppState) => ({});

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({ actions: {}});

export default connect(mapStateToProps, mapDispatchToProps)(Header);