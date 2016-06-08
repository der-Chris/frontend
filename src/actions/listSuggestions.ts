import AppState from '../reducers/AppState';
import Action, { SimpleAction } from './Action';
import * as SuggestionApi from '../api/suggestion';
import { QuestionModel } from '../common/models/Question';
import { SuggestionModel } from '../common/models/Suggestion';

export const FetchAllActive = 'listSuggestions:fetchAllActive';
export const FetchAllDone = 'listSuggestions:fetchAllDone';

export interface FetchAllDoneAction extends SimpleAction {
	suggestions: SuggestionModel[];
}

export function fetchAll(question: QuestionModel): Action {
	return (dispatch: Redux.Dispatch, getState: () => AppState) => {
		SuggestionApi.fetchAll(question)
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