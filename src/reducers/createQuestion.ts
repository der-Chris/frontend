import Action from '../actions/Action';
import { copyAssign } from '../utils';
import { NameChange, SaveActive, SaveDone } from '../actions/createQuestion';

export interface NameChangeAction extends Action {
	name: string;
	nameValid: string;
}

export default function createQuestion(state: any = {}, action: Action) {
	switch (action.type) {
		case NameChange:
			var nameChangeAction = action as NameChangeAction;
			return copyAssign({}, state, {
				name: nameChangeAction.name,
				nameValid: nameChangeAction.nameValid
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
