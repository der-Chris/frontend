import AppState from './AppState';
import { SimpleAction } from '../actions/Action';
import { FetchAllActive, FetchAllDone, FetchAllDoneAction } from '../actions/listSuggestions';
import { SuggestionModel } from '../../../common/models/Suggestion';
import { SaveDone as SaveSuggestionDone } from '../actions/createSuggestion';
import { SaveDoneAction as SaveSuggestionDoneAction } from './createSuggestion';

export interface ListSuggestionsState {
	suggestions: SuggestionModel[];
	fetchAllActive: boolean;
}

export const defaultState: ListSuggestionsState = {
	suggestions: [],
	fetchAllActive: false
};

export default function listSuggestions(state: ListSuggestionsState = defaultState, action: SimpleAction): ListSuggestionsState {
	switch (action.type) {
		case FetchAllActive:
			return Object.assign({}, state, {
				fetchAllActive: true
			});

		case FetchAllDone:
			var fetchAllDoneAction = action as FetchAllDoneAction;
			return Object.assign({}, state, {
				suggestions: fetchAllDoneAction.suggestions,
				fetchAllActive: false
			});

		case SaveSuggestionDone:
			let specficAction = action as SaveSuggestionDoneAction;
			let suggestionsCopy = state.suggestions.map(id => id);
			suggestionsCopy.push(specficAction.suggestion);

			return Object.assign({}, state, {
				suggestions: suggestionsCopy
			});

		default:
			return state;
	}
}
