import AppState from '../reducers/AppState';
import { TitleChangeAction, VisibilityChangeAction } from '../reducers/createQuestion';
import { QuestionModel, Visibility, titleValidator } from '../models/Question';
import * as QuestionApi from '../api/question';
import Action from './Action';
import {redirectViewQuestion} from './question';

export const TitleChange = 'createQuestion:titleChange';
export const VisibilityChange = 'createQuestion:visibilityChange';
export const SaveActive = 'createQuestion:saveActive';
export const SaveDone = 'createQuestion:saveDone';

export function titleChange(title: string): TitleChangeAction {
	return {
		type: TitleChange,
		title: title,
		titleValid: titleValidator(title)
	};
}

export function visibilityChange(visibility: Visibility): VisibilityChangeAction {
	return {
		type: VisibilityChange,
		visibility: visibility
	};
}

export function submitClick(): Action {
	return (dispatch: Redux.Dispatch, getState: () => AppState) => {
		let state = getState();
		QuestionApi.create(state.createQuestion.title, state.createQuestion.visibility)
			.then((question: QuestionModel) => {
				dispatch({ type: SaveDone });
				return question;
			})
			.then((question: QuestionModel) => {
				dispatch(redirectViewQuestion(question));
			});

		return dispatch({ type: SaveActive });
	};
}