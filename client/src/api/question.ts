import * as request from 'superagent';

//import '../mocks/Question';

import { Question } from '../models/Question';

export function create(title: string): Promise<Question> {
	return new Promise((resolve, reject) => {
		request
			.post('/api/v1/question/create')
			.send({ title })
			.end((err: Error, res: any) => {
				if (err) return reject(err);
				return resolve(res);
			});
	});
}

export function fetch(id: string): Promise<Question> {
	return new Promise((resolve, reject) => {
		request
			.get('/api/v1/question/' + id)
			.end((err: Error, res: any) => {
				if (err) return reject(err);
				return resolve(res);
			});
	});
}