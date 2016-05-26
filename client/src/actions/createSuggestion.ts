import AppState from '../reducers/AppState';
import { TextChangeAction } from '../reducers/createSuggestion';
import { SuggestionModel, textValidator } from '../models/Suggestion';
import * as SuggestionApi from '../api/suggestion';
import Action from './Action';

export const TextChange = 'createSuggestion:textChange';
export const SaveActive = 'createSuggestion:saveActive';
export const SaveDone = 'createSuggestion:saveDone';

export function textChange(text: string): TextChangeAction {
	return {
		type: TextChange,
		text,
		textValid: textValidator(text)
	};
}

export function submitClick(text: string): Action {
	return (dispatch: Redux.Dispatch, getState: () => AppState) => {
		let state: AppState = getState();
		SuggestionApi.create(state.createSuggestion.text, state.question.question._id, state.question.question.visibilityToken)
			.then((suggestion: SuggestionModel) => {
				dispatch({
					type: SaveDone,
					suggestion
				});
			});

		return dispatch({ type: SaveActive });
	};
}