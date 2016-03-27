import * as request from 'superagent';
import { Response } from 'superagent';

import { QuestionModel } from '../models/Question';
import { SuggestionModel } from '../models/Suggestion';

const baseUrl = '/api/v1/suggestion';

export function create(text: string): Promise<SuggestionModel> {
	return new Promise((resolve, reject) => {
		request
			.put(baseUrl)
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
		let url = baseUrl + '/search';
		if (key) url += '/' + key;

		request
			.get(url)
			.end((err: Error, res: Response) => {
				if (err) return reject(err);
				return resolve(res.body);
			});
	});
}