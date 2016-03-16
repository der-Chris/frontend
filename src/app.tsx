/// <reference path='../typings/main.d.ts' />
/// <reference path='../history.d.ts' />
/// <reference path='../superagent.d.ts' />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import 'es6-shim';

import Action from './actions/Action';
import reducer from './reducers/index';
import { Routes } from './routes';

/**
 * Thunk middleware (copied from redux-thunk) allows functions to the dispatched.
 */
const thunkMiddleware = (store: Redux.Store) => (next: any) => (action: any) => {
	return typeof action === 'function' ?
		action(store.dispatch, store.getState) : next(action);
};

/**
 * Logs all actions and states after they are dispatched.
 */
const loggerMiddleware = (store: Redux.Store) => (next: any) => (action: Action) => {
	console.groupCollapsed('Dispatching '+action.type);

	let result = next(action);
	console.log('Next state', store.getState());

	console.groupEnd();
	return result;
};

let store = createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

ReactDOM.render(
	<Provider store={store}>
		<Routes />
	</Provider>,
	document.getElementById('app'));