import { combineReducers } from 'redux';
import global from './global';
import createQuestion from './createQuestion';
import question from './question';

export default combineReducers({
	global,
	createQuestion,
	question
})
