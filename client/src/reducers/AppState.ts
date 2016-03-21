interface CreateQuestion {
	title?: string;
	titleValid: string;
	saveActive?: boolean;
}

interface AppState {
	createQuestion?: CreateQuestion;
	question?: any;
}

export default AppState;
