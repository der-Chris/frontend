import { TitleChange, SaveActive, SaveDone } from '../actions/createQuestion';
import AppState from "./AppState";
import { Visibility } from "../models/Question";
import {VisibilityChange} from "../actions/createQuestion";
import CreateQuestion from "./AppState";
import { SimpleAction } from '../actions/Action';

export interface TitleChangeAction extends SimpleAction {
	title: string;
	titleValid: string;
}

export interface VisibilityChangeAction extends SimpleAction {
	visibility: Visibility;
}

let defaultState = {
	title: '',
	visibility: 'public'
};

export default function createQuestion(state: CreateQuestion = defaultState, action: SimpleAction): CreateQuestion {
	switch (action.type) {
		case TitleChange:
			var titleChangeAction = action as TitleChangeAction;
			return Object.assign({}, state, {
				title: titleChangeAction.title,
				titleValid: titleChangeAction.titleValid
			});

		case VisibilityChange:
			var visibilityChangeAction = action as VisibilityChangeAction;
			return Object.assign({}, state, {
				visibility: visibilityChangeAction.visibility
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
