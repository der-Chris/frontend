import request from 'superagent';

import '../mocks/Question';

export class Question {
	_id: string;
	name: string;
}

// https://w0vb2kjd24.execute-api.eu-west-1.amazonaws.com/prod/hmc-create-question
// 

export function nameValidator(name: string): string {
	if (name.length < 4) {
		return 'MIN_LENGTH';
	}
	
	if (!(/^[a-zA-Z0-9 \-\+,;\.?!]+$/.test(name))) {
		return 'REGEX';
	}
	
	return null;
}

function create(name: string): Promise<Question> {
	return new Promise((resolve, reject) => {
		request
			.post('/hmc-create-question')
			.send({ name })
			.set('x-api-key', '9cwAx7kQNW6EX9y8BSbDn1ify1q6BaExuwj6UI1e')
			.end((err, res) => {
				if (err) return reject(err);
				return resolve(res);
			});
	});
}

function fetch(id: string): Promise<Question> {
	return new Promise((resolve, reject) => {
		request
			.get('/hmc-fetch-question/'+id)
			.set('x-api-key', '9cwAx7kQNW6EX9y8BSbDn1ify1q6BaExuwj6UI1e')
			.end((err, res) => {
				if (err) return reject(err);
				return resolve(res);
			});
	});
}

export var QuestionApi = {
	create,
	fetch
};
