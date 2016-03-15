import { hashHistory } from 'react-router';

import AppState from '../reducers/AppState';
import { NameChangeAction } from '../reducers/createQuestion';
import { Question, nameValidator, QuestionApi } from '../models/Question';

export const NameChange = 'createQuestion:nameChange';
export const SaveActive = 'createQuestion:saveActive';
export const SaveDone = 'createQuestion:saveDone';

export function nameChange(name: string): NameChangeAction {
	return {
		type: NameChange,
		name: name.trim(),
		nameValid: nameValidator(name.trim())
	};
}

export function submitClick() {
	return (dispatch: Redux.Dispatch, getState: () => AppState) => {
		QuestionApi.create(getState().createQuestion.name)
			.then((question: Question) => {
				dispatch({ type: SaveDone });
				return question;
			})
			.then((question: Question) => {
				hashHistory.push('/please/' + question._id);
			});

		return dispatch({ type: SaveActive });
	};
}
