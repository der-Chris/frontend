import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as TestUtils from 'react-addons-test-utils';

import CreateQuestion from '../CreateQuestion';
import Action from '../../actions/Action';
import AppState from '../../reducers/AppState';

describe('CreateQuestion', () => {

	function reducer(state: any = {}, action: Action): AppState {
		return null;
	}

	it('should display empty question title input', () => {
		return;
		
		let store = createStore(reducer);
		
		const createQuestion = TestUtils.renderIntoDocument(
			<Provider store={store}>
				<CreateQuestion />
			</Provider>
		);
		const createQuestionNode = ReactDOM.findDOMNode(createQuestion);
		expect(createQuestionNode.textContent).toEqual('Create Question');
	});

});
