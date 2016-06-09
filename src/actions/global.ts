import { history } from '../config';

import Action from './Action';
import { SimpleAction } from './Action';

export const Redirect = 'global:redirect';

export interface RedirectAction extends SimpleAction {
	type: string;
	url: string;
}

export function redirect(url: string): RedirectAction {
	history.push(url);

	return {
		type: Redirect,
		url
	};
}