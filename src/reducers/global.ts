import { FetchActive, FetchDone } from '../actions/question';
import { SimpleAction } from '../actions/Action';
import { Redirect, RedirectAction } from '../actions/global';

export default function global(state: any = {}, action: SimpleAction) {
	switch (action.type) {
		case Redirect:
			let redirectAction = action as RedirectAction;
			return Object.assign({}, state, {
				currentUrl: redirectAction.url
			});

		default:
			return state;
	}
}
