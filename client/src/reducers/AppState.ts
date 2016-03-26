import { CreateQuestionState } from './createQuestion';
import { CreateSuggestionState } from './createSuggestion';
import { ListQuestionsState } from './listQuestions';

interface AppState {
	createQuestion?: CreateQuestionState;
	question?: any;
	listQuestions: ListQuestionsState;

	createSuggestion?: CreateSuggestionState;
}

export default AppState;