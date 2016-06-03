import { QuestionModel } from '../../../common/models/Question';
import { SuggestionModel } from '../../../common/models/Suggestion';

const baseUrl = '/api/v1/question';

// TODO
let request: any;

export function create(text: string, questionId: string, visibilityToken?: string): Promise<SuggestionModel> {
	return new Promise((resolve, reject) => {
		let url = baseUrl + '/' + questionId;
		if (visibilityToken) url += '/' + visibilityToken;
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

export function fetchAll(questionId: string, visibilityToken?: string): Promise<SuggestionModel[]> {
	return new Promise((resolve, reject) => {
		let url = baseUrl + '/' + questionId;
		if (visibilityToken) url += '/' + visibilityToken;
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