import {FetchActive} from "../question";
jest.autoMockOff();
jest.dontMock('../question');
jest.dontMock('../global');
jest.dontMock('../../models/QuestionModel');

import Action, { FuncAction, SimpleAction } from '../Action';
import { QuestionModel } from '../../models/Question';
import { fetchById, redirectViewQuestion } from '../question';
import { Redirect } from '../global';

describe('question actions', () => {

	describe('fetchById', () => {
		it('should resolve and return question object', () => {
			// TODO
			/*let funcAction: FuncAction = fetchById('__id');
			expect(typeof funcAction).toBe('function');

			funcAction((action: Action) => {
				expect(typeof action.type).toBe('string');

				let simpleAction = action as SimpleAction;
				expect(simpleAction.type).toBe(FetchActive);
			});*/
		});
	});

	describe('redirectViewQuestion', () => {
		let q: QuestionModel = {
			_id: '__id',
			key: '__key',
			title: 'Test',
			visibility: 'private',
			createdAt: 'createdAt'
		};

		it('should redirect to public & password questions', () => {
			// Public
			q.visibility = 'public';
			let action = redirectViewQuestion(q);
			expect(action).toBeDefined();
			expect(action.type).toBe(Redirect);
			expect(action.url).toBe('/please/__id');

			// Password
			q.visibility = 'password';
			action = redirectViewQuestion(q);
			expect(action).toBeDefined();
			expect(action.type).toBe(Redirect);
			expect(action.url).toBe('/please/__id');
		});

		it('should redirect to private questions', () => {
			q.visibility = 'private';

			let action = redirectViewQuestion(q);
			expect(action).toBeDefined();
			expect(action.type).toBe(Redirect);
			expect(action.url).toBe('/please/__id/__key');
		});
	});

});
