import { QuestionModel, Visibility } from '../models/Question';
import { CreateSuggestionState } from './createSuggestion';

export interface CreateQuestion {
	title: string;
	visibility: Visibility;

	titleValid?: string;
	saveActive?: boolean;
}

interface AppState {
	createQuestion?: CreateQuestion;
	question?: any;

	createSuggestion?: CreateSuggestionState;
}

export default AppState;