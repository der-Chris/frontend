import { generateUUID } from '../utils';

export class Question {
	_id: string;
	name: string;
}

export function nameValidator(name: string): string {
	if (name.length < 4) {
		return 'MIN_LENGTH';
	}
	if (!(/^[a-zA-Z0-9 \-\+,;\.?!]+$/.test(name))) {
		return 'REGEX';
	}
	
	return null;
}

export function createQuestion(name: string): Promise<Question> {
	return new Promise((resolve, reject) => {
		var question = new Question();
		question._id = generateUUID();
		question.name = name;
		
		setTimeout(() => resolve(question), 1000);
	});
}
