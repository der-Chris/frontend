import { combineReducers } from 'redux';
import createQuestion from './createQuestion';
import question from './question';

export default combineReducers({
	createQuestion,
	question
})
