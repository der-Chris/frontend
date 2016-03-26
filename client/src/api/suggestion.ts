import * as request from 'superagent';
import { Response } from 'superagent';

import { QuestionModel } from '../models/Question';
import { SuggestionModel } from '../models/Suggestion';

export function create(text: string): Promise<SuggestionModel> {
	return new Promise((resolve, reject) => {
		request
			.put('/api/v1/question')
			.send({
				title,
				visibility
			})
			.end((err: Error, res: Response) => {
				if (err) return reject(err);
				return resolve(res.body);
			});
	});
}

export function fetchAll(questionId: string, key?: string): Promise<SuggestionModel[]> {
	return new Promise((resolve, reject) => {
		let url = '/api/v1/suggestion/search';
		if (key) url += '/' + key;

		request
			.get(url)
			.end((err: Error, res: Response) => {
				if (err) return reject(err);
				return resolve(res.body);
			});
	});
}