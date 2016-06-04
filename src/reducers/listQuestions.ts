import AppState from './AppState';

import { SimpleAction } from '../actions/Action';
import { FindActive, FindDone, FindDoneAction } from '../actions/listQuestions';
import { QuestionModel } from '../common/models/Question';

export interface ListQuestionsState {
	questions: QuestionModel[];
	findActive: boolean;
}

export const defaultState: ListQuestionsState = {
	questions: [],
	findActive: false
};

export default function listQuestions(state: ListQuestionsState = defaultState, action: SimpleAction): ListQuestionsState {
	switch (action.type) {
		case FindActive:
			return Object.assign({}, state, {
				findActive: true
			});

		case FindDone:
			var findDoneAction = action as FindDoneAction;
			return Object.assign({}, state, {
				questions: findDoneAction.questions,
				findActive: false
			});

		default:
			return state;
	}
}
