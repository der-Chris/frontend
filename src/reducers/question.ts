import { copyAssign } from '../utils';
import { FetchActive, FetchDone } from '../actions/question';

export default function question(state: any = {}, action: any) {
	switch (action.type) {
		case FetchActive:
			return copyAssign({}, state, {
				fetchActive: true
			});
		case FetchDone:
			return copyAssign({}, state, {
				fetchActive: false,
				question: action.question,
				fetchError: action.fetchError
			});
		
		default:
			return state;
	}
}
