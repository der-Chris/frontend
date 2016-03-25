import { FetchActive, FetchDone, FetchDoneAction } from '../actions/question';
import { QuestionModel as QuestionModel, Visibility } from '../models/Question';
import { SimpleAction } from '../actions/Action';
import AppState from './AppState';

export interface Question {
	question?: QuestionModel;
	fetchActive?: boolean;
	fetchError?: boolean;
}

export default function question(state: Question = {}, action: SimpleAction): AppState {
	switch (action.type) {
		case FetchActive:
			return Object.assign({}, state, {
				fetchActive: true
			});

		case FetchDone:
			let fetchDoneAction = action as FetchDoneAction;
			return Object.assign({}, state, {
				fetchActive: false,
				question: fetchDoneAction.question,
				fetchError: fetchDoneAction.fetchError
			});
		
		default:
			return state;
	}
}
