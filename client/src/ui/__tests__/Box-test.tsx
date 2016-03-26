jest.dontMock('../Box');

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-addons-test-utils';

import Box from '../Box';

describe('Box', () => {

	it('shows its children', () => {
		const box = TestUtils.renderIntoDocument(
			<Box>Test Content</Box>
		);
		const boxNode = ReactDOM.findDOMNode(box);

		expect(boxNode.textContent).toEqual('Test Content');
	});

	it('is clickable', () => {
		let clickCount = 0;
		let onClickHandler = () => {
			clickCount++;
		};

		const box = TestUtils.renderIntoDocument(
			<Box onClick={onClickHandler}><div className="internal-div">Content</div></Box>
		);
		const boxNode = ReactDOM.findDOMNode(box);

		expect(clickCount).toEqual(0);

		TestUtils.Simulate.click(boxNode);
		expect(clickCount).toEqual(1);

		TestUtils.Simulate.click(boxNode);
		expect(clickCount).toEqual(2);

		TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithClass(box, 'internal-div'));
		expect(clickCount).toEqual(3);
	});

});
