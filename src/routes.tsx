import * as React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import { history } from './config';
import Frontpage from './sites/Frontpage';
import Question from './sites/Question';

export class Routes extends React.Component<any, any> {
	render() {
		return (
			<Router history={history}>
				<Route path="/" component={Frontpage} />
				<Route path="/please/:id" component={Question} />
				<Route path="/please/:id/:visibilityToken" component={Question} />
			</Router>
		);
	}
}
