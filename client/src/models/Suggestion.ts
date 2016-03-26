export interface SuggestionModel {
	_id?: string;
	text: string;
	createdAt: string;
}

export function textValidator(text: string): string {
	if (text.length < 4) {
		return 'MIN_LENGTH';
	}

	if (!(/^[A-Za-z0-9 \/\-\+,:;\.?!=#'"]+$/.test(text))) {
		return 'REGEX';
	}

	return null;
}