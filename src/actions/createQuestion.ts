import { Question, nameValidator, createQuestion } from '../models/Question';

export const NameChange = 'createQuestion:nameChange';
export const SaveActive = 'createQuestion:saveActive';
export const SaveDone = 'createQuestion:saveDone';

export function nameChange(name: string) {
	return {
		type: NameChange,
		name,
		nameValid: nameValidator(name)
	};
}

export function submitClick(callback: (question: Question) => any) {
	return (dispatch) => {
		createQuestion('HELLOOO')
			.then((question: Question) => {
				dispatch({ type: SaveDone });
				return question;
			})
			.then(callback);
	
		return dispatch({ type: SaveActive });
	};
}
