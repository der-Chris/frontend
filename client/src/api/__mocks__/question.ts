import { QuestionModel } from '../../models/Question';

export function fetch(id: string): Promise<QuestionModel> {
	return new Promise((resolve, reject) => {
		if (id === '__id') {
			const q: QuestionModel = {
				id: id,
				visibility: 'public',
				visibilityToken: 'visibilityToken',
				title: 'Mock api/quesion:fetch',
				meta: {
					createdAt: new Date(),
					ip: '127.0.0.1',
					userAgent: ''
				}
			};
			return resolve(q);
		}
		else return reject('Not found');
	});
}

export function find(filter: Object): Promise<QuestionModel[]> {
	return new Promise((resolve, reject) => {
		return resolve([]);
	});
}
