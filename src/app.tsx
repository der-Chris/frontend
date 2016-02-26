/// <reference path='../typings/main.d.ts'/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Counter from './Counter';

let store = createStore(
    (state, action) => {
    	console.log(action.type);
        switch (action.type) {
            case 'INCR':
                return { counter: state.counter + action.by };
            default:
                return state;
        }
    },
    { counter: 0 });

ReactDOM.render(
	<Provider store={store}>
		<Counter />
	</Provider>,
	document.getElementById('app'));
