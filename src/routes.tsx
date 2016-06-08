import * as React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Frontpage from './sites/Frontpage';
import Question from './sites/Question';

export class Routes extends React.Component<any, any> {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path="/" component={Frontpage} />
				<Route path="/please/:id" component={Question} />
				<Route path="/please/:id/:visibilityToken" component={Question} />
			</Router>
		);
	}
}
