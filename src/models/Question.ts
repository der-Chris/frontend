import * as request from 'superagent';

import '../mocks/Question';

export enum Visibility {
	'public',
	'private',
	'password'
}

export interface Question {
	_id: string;
	key: string;
	title: string;
	visibility: Visibility;
}

// https://w0vb2kjd24.execute-api.eu-west-1.amazonaws.com/prod/hmc-create-question
// 'x-api-key', '9cwAx7kQNW6EX9y8BSbDn1ify1q6BaExuwj6UI1e'

export function titleValidator(title: string): string {
	if (title.length < 4) {
		return 'MIN_LENGTH';
	}
	
	if (!(/^[A-Za-z0-9 \-\+,;\.?!]+$/.test(title))) {
		return 'REGEX';
	}
	
	return null;
}

function create(title: string): Promise<Question> {
	return new Promise((resolve, reject) => {
		request
			.post('/hmc-create-question')
			.send({ title })
			.set('x-api-key', '9cwAx7kQNW6EX9y8BSbDn1ify1q6BaExuwj6UI1e')
			.end((err: Error, res: any) => {
				if (err) return reject(err);
				return resolve(res);
			});
	});
}

function fetch(id: string): Promise<Question> {
	return new Promise((resolve, reject) => {
		request
			.get('/hmc-fetch-question/' + id)
			.set('x-api-key', '9cwAx7kQNW6EX9y8BSbDn1ify1q6BaExuwj6UI1e')
			.end((err: Error, res: any) => {
				if (err) return reject(err);
				return resolve(res);
			});
	});
}

export let QuestionApi = {
	create,
	fetch
};