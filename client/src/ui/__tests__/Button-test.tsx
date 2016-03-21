import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-addons-test-utils';

jest.dontMock('../Button');
import Button from '../Button';

describe('Button', () => {

	let clickCount = 0;

	function clickHandler(ev:React.MouseEvent) {
		clickCount++;
	}

	it('should support basic usage', () => {
		clickCount = 0;

		const button = TestUtils.renderIntoDocument(
			<Button labelText="Button Label" onClick={clickHandler} />
		);
		const buttonNode = ReactDOM.findDOMNode(button);

		expect(buttonNode.textContent).toEqual('Button Label');
		expect(clickCount).toEqual(0);

		// Click with disabled = false
		TestUtils.Simulate.click(
			TestUtils.findRenderedDOMComponentWithTag(button, 'button')
		);
		expect(clickCount).toEqual(1);
	});

	it('should not be clickable if disabled', () => {
		clickCount = 0;

		const button = TestUtils.renderIntoDocument(
			<Button labelText="Button Label" disabled={true} onClick={clickHandler} />
		);
		TestUtils.Simulate.click(
			TestUtils.findRenderedDOMComponentWithTag(button, 'button')
		);

		expect(clickCount).toEqual(0);
	});

});
