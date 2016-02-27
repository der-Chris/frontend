/// <reference path='../typings/main.d.ts'/>
/// <reference path='../history.d.ts'/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { Routes } from './routes';

let store = createStore((state, action) => {
		console.log(action.type);
		
		switch (action.type) {
			case 'INCR':
				return { counter: state.counter + action.by };
			case 'SET':
				return { counter: action.to };
			default:
				return state;
		}
	},
	{ counter: 0 });

ReactDOM.render(
	<Provider store={store}>
		<Routes />
	</Provider>,
	document.getElementById('app'));
