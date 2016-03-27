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