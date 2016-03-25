import { QuestionModel } from '../../models/Question';

export function fetch(id: string): Promise<QuestionModel> {
	return new Promise((resolve, reject) => {
		if (id === '__id') {
			return resolve({
				_id: id,
				key: 'key',
				title: 'Mock api/quesion:fetch',
				visibility: 'public',
				createdAt: new Date().toISOString()
			});
		}
		else return reject('Not found');
	});
}