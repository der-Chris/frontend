import { TitleChange, SaveActive, SaveDone } from '../actions/createQuestion';
import AppState from './AppState';
import { Visibility } from '../common/models/Question';
import { VisibilityChange } from '../actions/createQuestion';
import { SimpleAction } from '../actions/Action';

export interface CreateQuestionState {
	title: string;
	visibility: Visibility;

	titleValid?: string;
	saveActive?: boolean;
}

export interface TitleChangeAction extends SimpleAction {
	title: string;
	titleValid: string;
}

export interface VisibilityChangeAction extends SimpleAction {
	visibility: Visibility;
}

let defaultState: CreateQuestionState = {
	title: '',
	visibility: 'public'
};

export default function createQuestion(state: CreateQuestionState = defaultState, action: SimpleAction): CreateQuestionState {
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
