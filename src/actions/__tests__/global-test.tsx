jest.mock('react-router');

import { Redirect, redirect } from '../global';

describe('global actions', () => {

	describe('redirect', () => {
		it('should redirect to given url', () => {
			let action = redirect('__url');
			expect(action).toBeDefined();
			expect(action.type).toBe(Redirect);
			expect(action.url).toBe('__url');
		});
	});

});
