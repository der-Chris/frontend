import * as request from 'superagent';
import { Response } from 'superagent';

//import '../mocks/Question';

import { Question, Visibility} from '../models/Question';

export function create(title: string, visibility: Visibility): Promise<Question> {
	return new Promise((resolve, reject) => {
		request
			.put('/api/v1/question')
			.send({
				title,
				visibility
			})
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
			.end((err: Error, res: Response) => {
				if (err) return reject(err);
				return resolve(res.body);
			});
	});
}