import { copyAssign } from '../utils';
import { NameChange, SaveActive, SaveDone } from '../actions/createQuestion';

export default function createQuestion(state: any = {}, action: any) {
	switch (action.type) {
		case NameChange:
			return copyAssign({}, state, {
				name: action.name,
				nameValid: action.nameValid
			});
		
		case SaveActive:
			return copyAssign({}, state, {
				saveActive: true
			});
		case SaveDone:
			return copyAssign({}, state, {
				saveActive: false
			});
		
		default:
			return state;
	}
}
