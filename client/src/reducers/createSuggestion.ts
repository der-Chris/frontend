import AppState from "./AppState";
import { SimpleAction } from '../actions/Action';
import { TextChange, SaveActive, SaveDone } from '../actions/createSuggestion';
import { SuggestionModel } from '../models/Suggestion';

export interface CreateSuggestionState {
	text: string;
	textValid?: string;
	saveActive?: boolean;
}

export interface TextChangeAction extends SimpleAction {
	text: string;
	textValid: string;
}

export interface SaveDoneAction extends SimpleAction {
	suggestion: SuggestionModel;
}

let defaultState: CreateSuggestionState = {
	text: ''
};

export default function createSuggestion(state: CreateSuggestionState = defaultState, action: SimpleAction): CreateSuggestionState {
	switch (action.type) {
		case TextChange:
			var textChangeAction = action as TextChangeAction;
			return Object.assign({}, state, {
				text: textChangeAction.text,
				textValid: textChangeAction.textValid
			});

		case SaveActive:
			return Object.assign({}, state, {
				saveActive: true
			});

		case SaveDone:
			var saveDoneAction = action as SaveDoneAction;
			let newState = Object.assign({}, state, defaultState, {
				suggestion: saveDoneAction.suggestion,
				saveActive: false
			});

			// Clear text validation
			delete newState.textValid;
			return newState;

		default:
			return state;
	}
}
