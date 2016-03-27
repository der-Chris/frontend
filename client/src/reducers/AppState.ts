import { CreateQuestionState } from './createQuestion';
import { CreateSuggestionState } from './createSuggestion';
import { ListQuestionsState } from './listQuestions';
import { ListSuggestionsState } from './listSuggestions';

interface AppState {
	createQuestion?: CreateQuestionState;
	question?: any;
	listQuestions: ListQuestionsState;

	createSuggestion?: CreateSuggestionState;
	listSuggestions?: ListSuggestionsState;
}

export default AppState;