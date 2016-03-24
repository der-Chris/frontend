import AppState from '../reducers/AppState';

export interface SimpleAction {
	type: string;
}

export type FuncAction = (dispatch: Redux.Dispatch, getState: () => AppState) => Action;

type Action = SimpleAction | FuncAction;
export default Action;