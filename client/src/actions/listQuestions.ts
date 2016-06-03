import AppState from '../reducers/AppState';
import Action from './Action';
import { SimpleAction } from './Action';
import * as QuestionApi from '../api/question';
import { QuestionModel } from '../../../common/models/Question';

export const FindActive = 'listQuestions:findActive';
export const FindDone = 'listQuestions:findDone';

export interface FindDoneAction extends SimpleAction {
	questions: QuestionModel[];
}

export function find(filter: Object): Action {
	return (dispatch: Redux.Dispatch, getState: () => AppState) => {
		QuestionApi.find(filter)
			.then((questions: QuestionModel[]) => {
				let action: FindDoneAction = {
					type: FindDone,
					questions
				};
				dispatch(action);
			});

		return dispatch({ type: FindActive });
	};
}