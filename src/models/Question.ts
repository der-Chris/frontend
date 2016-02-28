import { generateUUID } from '../utils';

export class Question {
	_id: string;
	name: string;
}

// https://w0vb2kjd24.execute-api.eu-west-1.amazonaws.com/prod/hmc-create-question
// x-api-key: 9cwAx7kQNW6EX9y8BSbDn1ify1q6BaExuwj6UI1e

export function nameValidator(name: string): string {
	if (name.length < 4) {
		return 'MIN_LENGTH';
	}
	if (!(/^[a-zA-Z0-9 \-\+,;\.?!]+$/.test(name))) {
		return 'REGEX';
	}
	
	return null;
}

let questionDb = {};

export function createQuestion(name: string): Promise<Question> {
	return new Promise((resolve, reject) => {
		var question = new Question();
		question._id = generateUUID();
		question.name = name;
		
		setTimeout(() => {
			questionDb[question._id] = question;
			resolve(question);
		}, 1000);
	});
}

export function fetchQuestion(id: string): Promise<Question> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(id, questionDb);
			if (id in questionDb) resolve(questionDb[id]);
			else reject('Question not found');
		}, 1000);
	});
}

