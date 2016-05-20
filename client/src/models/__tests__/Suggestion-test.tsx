import { textValidator } from '../Suggestion';

describe('Suggestion model', () => {

	describe('textValidator', () => {
		it('should allow urls', () => {
			let valid = textValidator('https://www.amzon.com/#/abc?ansdi=aidjsi');
			expect(valid).toBe(null);
		});
	});

});
