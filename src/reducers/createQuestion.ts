import Action from '../actions/Action';
import { NameChange, SaveActive, SaveDone } from '../actions/createQuestion';
import AppState from "./AppState";

export interface NameChangeAction extends Action {
	name: string;
	nameValid: string;
}

export default function createQuestion(state: any = {}, action: Action): AppState {
	switch (action.type) {
		case NameChange:
			var nameChangeAction = action as NameChangeAction;
			return Object.assign({}, state, {
				name: nameChangeAction.name,
				nameValid: nameChangeAction.nameValid
			});
		
		case SaveActive:
			return Object.assign({}, state, {
				saveActive: true
			});
		case SaveDone:
			return Object.assign({}, state, {
				saveActive: false
			});
		
		default:
			return state;
	}
}
