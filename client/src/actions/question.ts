import { QuestionModel } from '../common/models/Question';
import * as QuestionApi from '../api/question';
import { redirect } from './global';
import { RedirectAction } from './global';
import { SimpleAction, FuncAction } from './Action';

export const FetchActive = 'question:fetchById';
export const FetchDone = 'question:fetchDone';

export interface FetchDoneAction extends SimpleAction {
	type: string;
	question?: QuestionModel;
	fetchError?: any;
}

export function fetchById(id: string, visibilityToken?: string): FuncAction {
	return (dispatch: Redux.Dispatch) => {
		QuestionApi.fetch(id, visibilityToken)
			.then((question: QuestionModel) => {
				return dispatch({ type: FetchDone, question });
			})
			.catch((err: any) => {
				return dispatch({ type: FetchDone, fetchError: err });
			});

		return dispatch({ type: FetchActive });
	};
}

export function redirectViewQuestion(question: QuestionModel): RedirectAction {
	let url = '/please/' + question._id;
	if (question.visibility === 'private') {
		// QuestionModel is private -> append visibilityToken to url
		url += '/' + question.visibilityToken;
	}
	
	return redirect(url);
}