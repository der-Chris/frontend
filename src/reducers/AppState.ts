import { CreateQuestionState } from './createQuestion';
import { CreateSuggestionState } from './createSuggestion';
import { ListQuestionsState } from './listQuestions';
import { ListSuggestionsState } from './listSuggestions';
import { QuestionState } from './question';

interface AppState {
	createQuestion?: CreateQuestionState;
	question?: QuestionState;
	listQuestions: ListQuestionsState;

	createSuggestion?: CreateSuggestionState;
	listSuggestions?: ListSuggestionsState;
}

export default AppState;