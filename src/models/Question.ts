export class Question {
	_id: string;
	name: string;
}

// https://w0vb2kjd24.execute-api.eu-west-1.amazonaws.com/prod/hmc-create-question
// 'x-api-key', '9cwAx7kQNW6EX9y8BSbDn1ify1q6BaExuwj6UI1e'

export function nameValidator(name: string): string {
	if (name.length < 4) {
		return 'MIN_LENGTH';
	}
	
	if (!(/^[a-zA-Z0-9 \-\+,;\.?!]+$/.test(name))) {
		return 'REGEX';
	}
	
	return null;
}

function create(name: string): any {
	return axios.post('/hmc-create-question', {
		name
	});
}

function fetch(id: string): any {
	return axios.get('/hmc-fetch-question/'+id);
}

export var QuestionApi = {
	create,
	fetch
};