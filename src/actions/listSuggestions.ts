import AppState from '../reducers/AppState';
import Action, { SimpleAction } from './Action';
import * as SuggestionApi from '../api/suggestion';
import { SuggestionModel } from '../common/models/Suggestion';

export const FetchAllActive = 'listSuggestions:fetchAllActive';
export const FetchAllDone = 'listSuggestions:fetchAllDone';

export interface FetchAllDoneAction extends SimpleAction {
	suggestions: SuggestionModel[];
}

export function fetchAll(questionId: string, visibilityToken?: string): Action {
	return (dispatch: Redux.Dispatch, getState: () => AppState) => {
		SuggestionApi.fetchAll(questionId, visibilityToken)
			.then((suggestions: SuggestionModel[]) => {
				let action: FetchAllDoneAction = {
					type: FetchAllDone,
					suggestions
				};
				dispatch(action);
			});

		return dispatch({ type: FetchAllActive });
	};
}