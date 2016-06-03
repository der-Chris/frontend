import { QuestionModel } from '../../../../common/models/Question';

export function fetch(_id: string): Promise<QuestionModel> {
	return new Promise((resolve, reject) => {
		if (_id === '__id') {
			const q: QuestionModel = {
				_id: _id,
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
