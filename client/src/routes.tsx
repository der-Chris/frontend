import * as React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Frontpage from './sites/Frontpage';
import Please from './sites/Please';

export class Routes extends React.Component<any, any> {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={Frontpage} />
				<Route path="/please/:id" component={Please} />
				<Route path="/please/:id/:key" component={Please} />
			</Router>
		);
	}
}
