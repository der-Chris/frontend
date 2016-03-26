import * as request from 'superagent';
import { Response } from 'superagent';

//import '../mocks/QuestionModel';

import { QuestionModel, Visibility} from '../models/Question';

export function create(title: string, visibility: Visibility): Promise<QuestionModel> {
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

export function fetch(id: string, key?: string): Promise<QuestionModel> {
	return new Promise((resolve, reject) => {
		let url = '/api/v1/question/' + id;
		if (key) url += '/' + key;

		request
			.get(url)
			.end((err: Error, res: Response) => {
				if (err) return reject(err);
				return resolve(res.body);
			});
	});
}

export function find(filter: Object): Promise<QuestionModel[]> {
	return new Promise((resolve, reject) => {
		request
			.post('/api/v1/question/search')
			.send(filter)
			.end((err: Error, res: Response) => {
				if (err) return reject(err);
				return resolve(res.body);
			});
	});
}