import * as React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import { history } from './config';
import Frontpage from './sites/Frontpage';
import Question from './sites/Question';
import Legal from './sites/Legal';

export class Routes extends React.Component<any, any> {
	render() {
		return (
			<Router history={history}>
				<Route path="/" component={Frontpage} />
				<Route path="/legal" component={Legal} />
				<Route path="/please/:id(/:visibilityToken)" component={Question} />
			</Router>
		);
	}
}
