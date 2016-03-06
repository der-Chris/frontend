import LinearProgress from 'material-ui/lib/linear-progress';

import { Question, QuestionApi } from '../models/Question';

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
