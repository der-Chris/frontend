interface CreateQuestion {
	name?: string;
	nameValid: string;
	saveActive?: boolean;
}

interface AppState {
	createQuestion?: CreateQuestion;
	question?: any;
}

export default AppState;
