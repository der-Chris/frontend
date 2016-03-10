/// <reference path='../typings/main.d.ts'/>
/// <reference path='../history.d.ts'/>

import * as React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Frontpage from './sites/Frontpage';
import Please from './sites/Please';

export class Routes extends React.Component<any, any> {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={Frontpage} />
				<Route path="/please/:qid" component={Please} />
			</Router>
		);
	}
}
