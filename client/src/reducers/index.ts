import { combineReducers } from 'redux';
import global from './global';
import createQuestion from './createQuestion';
import question from './question';
import createSuggestion from './createSuggestion';

export default combineReducers({
	global,
	createQuestion,
	question,
	createSuggestion
})
