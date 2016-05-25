jest.mock('../../api/question');

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import * as TestUtils from 'react-addons-test-utils';

import reducer from '../../reducers/index';
import { thunkMiddleware } from '../../middleware';
import ListQuestions from '../ListQuestions';

describe('ListQuestions', () => {

	it('should display empty list initially', () => {
		let store = createStore(reducer, applyMiddleware(thunkMiddleware));
		
		const titleText = 'List Questions Test Title Text';
		const filter = { visibility: 'public' };

		const listQuestions = TestUtils.renderIntoDocument(
			<Provider store={store}>
				<ListQuestions titleText={titleText} filter={filter} />
			</Provider>
		);
		const listQuestionsNode = ReactDOM.findDOMNode(listQuestions);
		expect(listQuestionsNode.textContent).toEqual(titleText);
	});

});
