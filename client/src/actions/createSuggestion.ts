import AppState from '../reducers/AppState';
import { TextChangeAction } from '../reducers/createSuggestion';
import { SuggestionModel, textValidator } from '../models/Suggestion';
import Action from './Action';

export const TextChange = 'createSuggestion:textChange';

export function textChange(text: string): TextChangeAction {
	return {
		type: TextChange,
		text,
		textValid: textValidator(text)
	};
}

export function submitClick(text: string): Action {
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