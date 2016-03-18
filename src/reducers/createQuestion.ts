import Action from '../actions/Action';
import { TitleChange, SaveActive, SaveDone } from '../actions/createQuestion';
import AppState from "./AppState";

export interface TitleChangeAction extends Action {
	title: string;
	titleValid: string;
}

export default function createQuestion(state: any = {}, action: Action): AppState {
	switch (action.type) {
		case TitleChange:
			var titleChangeAction = action as TitleChangeAction;
			return Object.assign({}, state, {
				title: titleChangeAction.title,
				titleValid: titleChangeAction.titleValid
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
