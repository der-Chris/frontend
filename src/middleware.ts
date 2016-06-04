import Action, { SimpleAction, FuncAction } from './actions/Action';

/**
 * Thunk middleware (copied from redux-thunk) allows functions to the dispatched.
 */
export const thunkMiddleware = (store: Redux.Store) => (next: any) => (action: Action) => {
	if (typeof action === 'function') {
		let funcAction = action as FuncAction;
		return funcAction(store.dispatch, store.getState);
	}
	else return next(action);
};

/**
 * Logs all actions and states after they are dispatched.
 */
export const loggerMiddleware = (store: Redux.Store) => (next: any) => (action: SimpleAction) => {
	console.group('Dispatching ' + action.type);

	let result = next(action);
	console.log('Next state', store.getState());

	console.groupEnd();
	return result;
};