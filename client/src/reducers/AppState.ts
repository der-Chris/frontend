import { Visibility } from '../models/Question';

export interface CreateQuestion {
	title: string;
	visibility: Visibility;

	titleValid?: string;
	saveActive?: boolean;
}

interface AppState {
	createQuestion?: CreateQuestion;
	question?: any;
}

export default AppState;