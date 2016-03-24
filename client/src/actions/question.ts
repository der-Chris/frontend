import { Question } from '../models/Question';
import * as QuestionApi from '../api/question';
import Action from './Action';
import {redirect} from "./global";

export const FetchActive = 'question:fetchQuestion';
export const FetchDone = 'question:fetchDone';

export function fetchQuestion(id: string) {
	return (dispatch: Redux.Dispatch) => {
		QuestionApi.fetch(id)
			.then((question: Question) => {
				return dispatch({ type: FetchDone, question });
			})
			.catch((err: any) => {
				return dispatch({ type: FetchDone, fetchError: err });
			});
	
		return dispatch({ type: FetchActive });
	};
}

export function redirectViewQuestion(question: Question): Action {
	return redirect('/please/' + question._id);
}