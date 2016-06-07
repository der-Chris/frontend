import { FetchActive, FetchDone, FetchDoneAction } from '../actions/question';
import { QuestionModel as QuestionModel, Visibility } from '../common/models/Question';
import { SimpleAction } from '../actions/Action';
import AppState from './AppState';

export interface QuestionState {
	question?: QuestionModel;
	fetchActive?: boolean;
	fetchError?: PouchError;
}

export default function question(state: QuestionState = {}, action: SimpleAction): QuestionState {
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
