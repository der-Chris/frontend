import * as request from 'superagent';
import { Response } from 'superagent';

import { QuestionModel } from '../models/Question';
import { SuggestionModel } from '../models/Suggestion';

const baseUrl = '/api/v1/question';

export function create(text: string, questionId: string, key?: string): Promise<SuggestionModel> {
	return new Promise((resolve, reject) => {
		let url = baseUrl + '/' + questionId;
		if (key) url += '/' + key;
		url += '/suggestion';
		request
			.put(url)
			.send({
				text
			})
			.end((err: Error, res: Response) => {
				if (err) return reject(err);
				return resolve(res.body);
			});
	});
}

export function fetchAll(questionId: string, key?: string): Promise<SuggestionModel[]> {
	return new Promise((resolve, reject) => {
		let url = baseUrl + '/' + questionId;
		if (key) url += '/' + key;
		url += '/suggestions';

		request
			.get(url)
			.end((err: Error, res: Response) => {
				if (err) return reject(err);
				return resolve(res.body);
			});
	});
}

import { API_MOCKS } from '../config';
if (API_MOCKS) {
	let mocker = require('superagent-mocker');
	let mock = mocker(request);

	const mockedSuggestions: { [qid: string]: SuggestionModel[] } = {
		'id1': [
			{
				id: 'suggestion1',
				questionId: 'id1',
				text: 'What about option #1',
				meta: {
					createdAt: new Date(),
					ip: '127.0.0.1',
					userAgent: ''
				}
			}
		]
	};
	
	mock.get(baseUrl + '/:id/suggestions', function (req: any) {
		return { body: mockedSuggestions[req.params.id] };
	});
}