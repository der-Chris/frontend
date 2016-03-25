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