import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import * as TestUtils from 'react-addons-test-utils';

import CreateQuestion from '../CreateQuestion';
import reducer from '../../reducers/index';
import { thunkMiddleware } from '../../middleware';

describe('CreateQuestion', () => {

	it('should display empty question title input', () => {
		let store = createStore(reducer, applyMiddleware(thunkMiddleware));
		
		const createQuestion = TestUtils.renderIntoDocument(
			<Provider store={store}>
				<CreateQuestion />
			</Provider>
		);
		const createQuestionNode = ReactDOM.findDOMNode(createQuestion);
		expect(createQuestionNode.textContent).toContain('Create Question');
	});

});
