/// <reference path='../typings/index.d.ts' />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import 'es6-shim';

import Action, { SimpleAction, FuncAction } from './actions/Action';
import reducer from './reducers/index';
import { thunkMiddleware, loggerMiddleware } from './middleware';
import { Routes } from './routes';

let store = createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

ReactDOM.render(
	<Provider store={store}>
		<Routes />
	</Provider>,
	document.getElementById('app'));
