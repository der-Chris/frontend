jest.mock('../../api/question');

import AppState from '../../reducers/AppState';
import Action, { FuncAction, SimpleAction } from '../Action';
import { QuestionModel } from '../../models/Question';
import { FetchActive, FetchDone, fetchById, redirectViewQuestion, FetchDoneAction } from '../question';
import { Redirect } from '../global';

describe('question actions', () => {

	describe('fetchById', () => {
		pit('should resolve and return question object', () => {
			let funcAction: any = fetchById('__id');
			expect(typeof funcAction).toBe('function');

			return new Promise((resolve, reject) => {
				let invocationCount = 0;

				funcAction((action: Action) => {
					expect('type' in action).toBeTruthy();
					let simpleAction = action as SimpleAction;

					if (invocationCount === 0) {
						expect(simpleAction.type).toBe(FetchActive);
					}
					else {
						expect(simpleAction.type).toBe(FetchDone);
						let fetchDoneAction = action as FetchDoneAction;
						expect(fetchDoneAction.question).toBeDefined();
						expect(fetchDoneAction.question._id).toBe('__id');
						resolve();
					}

					invocationCount++;
				});
			});
		});

		pit('should reject and provide the error', () => {
			let funcAction: any = fetchById('abc');
			expect(typeof funcAction).toBe('function');

			return new Promise((resolve, reject) => {
				let invocationCount = 0;

				funcAction((action: Action) => {
					expect('type' in action).toBeTruthy();
					let simpleAction = action as SimpleAction;

					if (invocationCount === 0) {
						expect(simpleAction.type).toBe(FetchActive);
					}
					else {
						expect(simpleAction.type).toBe(FetchDone);
						let fetchDoneAction = action as FetchDoneAction;
						expect(fetchDoneAction.question).toBeUndefined();
						expect(fetchDoneAction.fetchError).toBeDefined();
						resolve();
					}

					invocationCount++;
				});
			});
		});
	});

	describe('redirectViewQuestion', () => {
		let q: QuestionModel = {
			_id: '__id',
			key: '__key',
			title: 'Test',
			visibility: 'private',
			createdAt: new Date()
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
