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
	console.group();
	console.info('dispatching', action);
	let result = next(action);
	console.log('next state', store.getState());
	console.groupEnd();
	return result;
};

let store = createStore(reducer, applyMiddleware(loggerMiddleware, thunkMiddleware));

ReactDOM.render(
	<Provider store={store}>
		<Routes />
	</Provider>,
	document.getElementById('app'));

import { nameChange, submitClick } from './actions/createQuestion';
store.dispatch(nameChange('Hello World!'));
store.dispatch(submitClick());