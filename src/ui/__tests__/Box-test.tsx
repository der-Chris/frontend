/// <reference path='../../../jest.d.ts' />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-addons-test-utils';

jest.unmock('../Box');
import Box, {testVar} from '../Box';

describe('Box', () => {

	it('supports childrens', () => {
		const box = TestUtils.renderIntoDocument(
			<Box>Test Content</Box>
		);
		const boxNode = ReactDOM.findDOMNode(box);

		// Verify that it's Off by default
		expect(boxNode.textContent).toEqual('Test Content');
	});

});
