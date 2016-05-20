import { combineReducers } from 'redux';

import global from './global';
import createQuestion from './createQuestion';
import question from './question';
import listQuestions from './listQuestions';
import createSuggestion from './createSuggestion';
import listSuggestions from './listSuggestions';

export default combineReducers({
	global,
	createQuestion,
	question,
	listQuestions,
	createSuggestion,
	listSuggestions
})
