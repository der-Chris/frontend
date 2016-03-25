import AppState from "./AppState";
import { SimpleAction } from '../actions/Action';
import { TextChange } from '../actions/createSuggestion';

export interface CreateSuggestionState {
	text: string;
	textValid: string;
}

export interface TextChangeAction extends SimpleAction {
	text: string;
	textValid: string;
}

let defaultState: CreateSuggestionState = {
	text: '',
	textValid: null
};

export default function createSuggestion(state: CreateSuggestionState = defaultState, action: SimpleAction): CreateSuggestionState {
	switch (action.type) {
		case TextChange:
			var textChangeAction = action as TextChangeAction;
			return Object.assign({}, state, {
				text: textChangeAction.text,
				textValid: textChangeAction.textValid
			});

		default:
			return state;
	}
}
