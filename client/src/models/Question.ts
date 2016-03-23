export enum Visibility {
	'public',
	'private',
	'password'
}

export interface Question {
	id: string;
	key: string;
	title: string;
	visibility: Visibility;
}

export function titleValidator(title: string): string {
	if (title.length < 4) {
		return 'MIN_LENGTH';
	}

	if (!(/^[A-Za-z0-9 \-\+,;\.?!]+$/.test(title))) {
		return 'REGEX';
	}

	return null;
}