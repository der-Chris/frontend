import { browserHistory } from 'react-router';

import AppState from '../reducers/AppState';
import { TitleChangeAction } from '../reducers/createQuestion';
import { Question, titleValidator } from '../models/Question';
import * as QuestionApi from '../api/question';

export const TitleChange = 'createQuestion:titleChange';
export const SaveActive = 'createQuestion:saveActive';
export const SaveDone = 'createQuestion:saveDone';

export function titleChange(title: string): TitleChangeAction {
	return {
		type: TitleChange,
		title: title.trim(),
		titleValid: titleValidator(title.trim())
	};
}

export function submitClick() {
	return (dispatch: Redux.Dispatch, getState: () => AppState) => {
		QuestionApi.create(getState().createQuestion.title)
			.then((question: Question) => {
				dispatch({ type: SaveDone });
				return question;
			})
			.then((question: Question) => {
				browserHistory.push('/please/' + question.id);
			});

		return dispatch({ type: SaveActive });
	};
}
