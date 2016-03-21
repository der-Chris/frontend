import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-addons-test-utils';

jest.dontMock('../Box');
import Box from '../Box';

describe('Box', () => {

	it('supports childrens', () => {
		const box = TestUtils.renderIntoDocument(
			<Box>Test Content</Box>
		);
		const boxNode = ReactDOM.findDOMNode(box);

		expect(boxNode.textContent).toEqual('Test Content');
	});

});
